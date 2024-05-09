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

1. [ ] Error boundary
2. [ ] Translations
3. [ ] Authentication
4. [ ] Data fetching

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
