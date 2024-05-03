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

magine you are developing a product display application, where you need to show product images and detailed descriptions simultaneously. You can use the Split Screen mode, displaying product images on the left and product details and action buttons on the right. This allows users to view images while reading information

From above scenario, here is an example from real world:

![apple watch product display](./split-screen/public/assets/split-screen.png)

- The left side of the screen displays the product image.
- The right side of the screen displays the product details.
