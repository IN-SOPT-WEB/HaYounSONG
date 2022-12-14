import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { worker } from "./mocks/worker";
if (process.env.NODE_ENV === "development") {
  worker.start();
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

