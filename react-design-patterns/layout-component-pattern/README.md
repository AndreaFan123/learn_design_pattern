# Layout component design pattern

## Main concerns of the components and the idea behind the pattern

Helping us to arrange other components that we create on the page, and the main idea is layout components shouldn't know where they are being displayed.

### Examples

1. Split screens.
2. Modals.
3. List items.
4. Holy grail layout.
5. Real world case.

### Project Setup

- Inside the `split-screen` directory, run the following command to install the dependencies:

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

### Split screens

**Practice Scenario:**

Imagine you are developing a product display application, where you need to show product images and detailed descriptions simultaneously. You can use the Split Screen mode, displaying product images on the left and product details and action buttons on the right. This allows users to view images while reading information

From above scenario, here is an example from real world:

![apple watch product display](./split-screen/public/assets/split-screen.png)

- The left side of the screen displays the product image.
- The right side of the screen displays the product details.

Here are the basic implementation:

**Desktop**

![split screen desktop](./split-screen/public/assets/split-screen-desktop.png)

**Mobile**

![split screen mobile](./split-screen/public/assets/split-screen-mobile.png)

> Check the `split-screen` directory for the implementation.

#### Optimizing the split screen layout part 1: Dynamic flex property

From time to time, we may need to adjust layout, so it wouldn't be a good idea to give them a fixed value for the flex property, so the better way to amend `flex:{number}` to whatever we need.

```tsx
interface productSplitScreenProps {
  left: React.ComponentType;
  right: React.ComponentType;
}

export default function ProductSplitScreen({
  left: LeftScreen,
  right: RightScreen,
}: productSplitScreenProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 ">
      <div className="flex-1">
        <LeftScreen />
      </div>
      <div className="flex-1">
        <RightScreen />
      </div>
    </div>
  );
}
```

Back to `App.tsx`, let's add additional props to the `ProductSplitScreen` component:

```tsx
// App.tsx
function App() {
  return (
    <main className="w-full max-w-full h-full px-4 md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1440px]">
      <h1 className="text-2xl font-bold pb-2">...</h1>
      <ProductSplitScreen
        left={ProductImage}
        right={ProductDetails}
        leftWeight={3}
        rightWeight={1}
      />
    </main>
  );
}
```

Then update the `ProductSplitScreen` component:

```tsx
// product-split-screen.tsx
interface productSplitScreenProps {
  left: React.ComponentType;
  right: React.ComponentType;
  leftWeight: number;
  rightWeight: number;
}

export default function ProductSplitScreen({
  left: LeftScreen,
  right: RightScreen,
  leftWeight,
  rightWeight,
}: productSplitScreenProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 ">
      <div className={`flex-${leftWeight}`}>
        <LeftScreen />
      </div>
      <div className={`flex-${rightWeight}`}>
        <RightScreen />
      </div>
    </div>
  );
}
```

> flex-1 is a shorthand for flex: 1 1 0%, which means it will take up the remaining space. The flex property is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

#### Optimizing the split screen layout part 2: Pass components as children

We can also pass `ProductImage` and `ProductDetails` as children to the `ProductSplitScreen` component as this is more readable and easier to understand.

```tsx
// App.tsx
<ProductSplitScreen leftWeight={1} rightWeight={3}>
  <ProductImage />
  <ProductDetails />
</ProductSplitScreen>
```

Then update the `ProductSplitScreen` component:

```tsx
// product-split-screen.tsx
interface productSplitScreenProps {
  children: React.ReactNode;
  leftWeight: number;
  rightWeight: number;
}

export default function ProductSplitScreen({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: productSplitScreenProps) {
  const [left, right] = React.Children.toArray(children);

  return (
    <div className="flex flex-col lg:flex-row gap-6 ">
      <div className={`flex-${leftWeight}`}>{left}</div>
      <div className={`flex-${rightWeight}`}>{right}</div>
    </div>
  );
}
```

By implementing the above changes, we can pass props inside the `ProductImage` and `ProductDetails` easily, compare to the previous implementation, we would need to add props in `App.tsx`, and pass as props inside `ProductSplitScreen` component, then to the `ProductImage` and `ProductDetails` component.

```tsx
// App.tsx
function App() {
  return (
    <main className="w-full max-w-full h-full px-4 md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1440px]">
      <h1 className="text-2xl font-bold pb-2">購買 Apple Watch Series 9</h1>
      <ProductSplitScreen leftWeight={1} rightWeight={3}>
        <ProductImage />
        <ProductDetails
          title="錶殼。 請從材質和外觀開始選擇。"
          material="鋁金屬"
          option="可選擇 GPS 或 GPS + 行動網路"
          price="NT$13,500 起"
          description="拉絲外觀搭配 Ion-X 強化玻璃顯示器。"
        />
      </ProductSplitScreen>
    </main>
  );
}
```

```tsx
// ProductDetails.tsx
interface ProductDetailsProps {
  title: string;
  material: string;
  option: string;
  price: string;
  description: string;
}

export default function ProductDetails({
  title,
  material,
  option,
  price,
  description,
}: ProductDetailsProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <div>
          <h3>{material}</h3>
          <span>{option}</span>
        </div>
        <div>
          <span>{price}</span>
        </div>
      </div>
      <div>
        <span>{description}</span>
      </div>
    </div>
  );
}
```

---

### Modals
