import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// The tasks data

const DATA = [
  { id: "todo-0", name: "Go and learn how to code", completed: true },
  { id: "todo-1", name: "Ride my Motorcycle", completed: false },
  { id: "todo-2", name: "Go to the grocery store", completed: false },
  { id: "todo-3", name: "Sleep and repeat", completed: false }
];


//let DATA;

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
