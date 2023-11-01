## Setup

### Create React Project with Vite

- npm create vite@latest my-project -- --template react
- cd my-project
- npm install

### Install Tailwind CSS

- nstall tailwindcss and its peer dependencies:
  - npm install -D tailwindcss postcss autoprefixer
- Generate your tailwind.config.js and postcss.config.js files using following commands
  - npx tailwindcss init -p

### Configure your template paths

- Add the paths to all of your template files in your tailwind.config.js file.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start your build process

Run your build process with "npm run dev"

### Start using Tailwind in your project

App.js

```js
export default function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
```
