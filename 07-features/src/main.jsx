import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { worker } from "./features/07-msw/mocks/browser";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
});
