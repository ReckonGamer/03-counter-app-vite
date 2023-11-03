import React from 'react';
import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import "./styles.css";

import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>                 
        <CounterApp value={0}/>  
       { /* <FirstApp title='Hola, soy Pau'/> */ } 
    </React.StrictMode>
);

// 1. Create the root in the index.html
// 2. With the method ReactDOM.createRoot, we search for the element root.
// 3. Render with StrictMode.
// 4. Inside the StrictMode, we will pass the components.