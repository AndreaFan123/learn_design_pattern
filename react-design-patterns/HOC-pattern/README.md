# High Order Component design pattern

## Table of contents

## Main concerns of the components and the idea behind the pattern

- Higher Order Component returns another component, see the example below:

```jsx
// regular component
const Component = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

// HOC
const withHOC = (Component) => {
  return () => {
    return (
      <div>
        <Component />
      </div>
    );
  };
};
```

- It can share complex logic between components or add additional functionality to a component.
- It does not need to have capital letter for the name of the component, because we don't display it directly in the JSX.

### Examples

1. [ ] Data fetching
2. [ ] Translations
3. [ ] Authentication
4. [ ] Error boundary

### Project Setup

- Inside the project directory, run the following command to install the dependencies:

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest ./ -- --template react-ts

# yarn
yarn create vite ./ --template react-ts

# pnpm
pnpm create vite ./ --template react-ts

# bun
bun create vite ./ --template react-ts
```

- Install Tailwind CSS:

```bash
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

- Add the following to the `tailwind.config.js` file:

```js
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

- Add the following to the `index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Data fetching

Similar to the container-presentational pattern, normally we will fetch data in the container component and pass it down to the presentational component. However, we can also use a HOC to fetch data and pass it down to the component.

First we create a HOC that fetches data, check folder `hoc-fetch-data`.

```jsx
export default function HocFetchData(
  Component: FunctionComponent<{
    products?: Product[],
    error: boolean,
    isLoading: boolean,
  }>,
  url: string
) {
  function ComponentWithProps(props) {
    const [data, setData] = useState({
      data: props.products,
      error: props.error,
      isLoading: props.isLoading,
    });

    const fetchData = async () => {
      setData({ data: null, error: false, isLoading: true });
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
          setData({
            data: data,
            error: false,
            isLoading: false,
          });
        }
      } catch (error) {
        setData({
          data: null,
          error: error,
          isLoading: false,
        });
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    if (data.isLoading) {
      return <div>Loading...</div>;
    }

    if (data.error) {
      return <div>Something went wrong</div>;
    }

    return (
      <Component
        products={data.data?.products}
        error={data.error}
        isLoading={data.isLoading}
      />
    );
  }
  return ComponentWithProps;
}
```

Let's break down the code above:

1. The HOC takes two arguments, the component and the URL to fetch the data.
2. The HOC returns a new component that fetches the data and passes it down to the component.
3. The new component has a state to store the data, error, and loading state.
4. It fetches the data when the component mounts and updates the state accordingly.
5. It renders the loading state if the data is loading.
6. It renders the error state if there is an error.
7. It renders the component with the data if the data is fetched successfully.

> If we write something like return (props) => {...}, TS will yell at us with th following error: React Hook “useState” cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function.
>
> That's why we need to create a new function that returns the component with the props.

Next, inside `App.tsx`, we use the HOC to fetch data and pass it down to the component.

```jsx
function App() {
  const ProductListWrapped = HocFetchData(
    ProductList,
    "https://dummyjson.com/products"
  );
  return (
    <div className="App">
      <ProductListWrapped />
    </div>
  );
}
```

#### How can we optimize?

The way I defined props in the HOC was not generic, if we fetch different data, we need to change the props in the HOC. We can use generics to make it more generic.
