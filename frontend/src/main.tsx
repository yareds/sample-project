//REACTJS
import React from 'react';
import ReactDOM from 'react-dom/client';
//APPLICATION
import App from './App';
//STYLE
import './index.css';


ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
)
.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);