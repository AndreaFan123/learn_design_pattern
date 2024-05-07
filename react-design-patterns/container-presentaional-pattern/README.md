# Container/presentational design pattern

## Table of contents

- [Main concerns of the components and the idea behind the pattern](#main-concerns-of-the-components-and-the-idea-behind-the-pattern)
- [Examples](#examples)
- [Project Setup](#project-setup)
- [User profile](#user-profile)
  - [Practice Scenario](#practice-scenario)
  - [Steps](#steps)

## Main concerns of the components and the idea behind the pattern

- Container component cares about **what** data is shown to the user.

- Presentational component cares about **how** data is shown to the user.

### Examples

1. [ ] User profile
2. [ ] Houses list
3. [ ] News feed

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

### User profile

#### Practice Scenario:

User profile may be the most common UI in any application, it allows user to see their information and update it.

#### Steps:

1. Create a component called `UserProfileContainer` component that will fetch the user data from an API, and pass it to the `UserProfile` component.
2. Create a component called `UserProfile` that will display the user data.

**Check the `user-profile` directory for the implementation.**

#### Options:

We can use hooks to fetch data without having container components.
