
import React from "react";
import ReactDOM from 'react-dom/client';
import {FirstApp} from "./FirstApp";
import  "./styles.css";
import { CounterApp } from "./CounterApp";

function App(){
return (
<h1>hola mundo </h1>)
};

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>  

  <CounterApp value={10}/>
 
</React.StrictMode>


);

