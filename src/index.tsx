import * as ReactDOMClient from 'react-dom/client';
import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import './style/index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
//TODO clean up
const container = document.getElementById('app-root') as HTMLElement;

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
<Provider store={store}>
<App />
</Provider>
);

// ReactDOM.render(
//     <App/>,
//     document.getElementById('app-root'),
// )