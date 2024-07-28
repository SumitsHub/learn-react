#### Vite Install

```sh
npm create vite@latest app-name -- --template react
npm install
npm run dev
```

- http://localhost:5173/

#### Vite Setup

- need to use .jsx extension
- index.html in the source instead of public
- assets still in public
- instead of index.js, need to use main.jsx
- to spin up dev server - "npm run dev"

- rest the same - imports/exports, deployment, assets, etc...

## Advanced Topics

#### Project Structure - Default Export

Normally somewhere in the src

/components/componentName.jsx
/screens/componentName.jsx

```js
export { default } from './Navbar';
```

#### Project Structure - Named Exports

```js
import Home from './Home';
import About from './About';

export { Home, About };
```

in App.jsx

```js
import {Home, About} from 'pathToFolder/Pages'
```
