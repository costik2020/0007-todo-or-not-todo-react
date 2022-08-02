import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// The tasks data
const DATA = [
  { id: "todo-0", name: "item1", completed: true },
  { id: "todo-1", name: "item2", completed: false },
  { id: "todo-2", name: "item3", completed: false },
  { id: "todo-3", name: "item4", completed: false }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
