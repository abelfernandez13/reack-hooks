import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from './08-useReducer/TodoApp'
import { BrowserRouter } from "react-router-dom";
// import { CallbackHook } from './06-memo/CallbackHook'
// import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/layout'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

// import HooksApp from './HooksApp'
//import CounterApp  from "./useState/CounterApp";
// import CounterAppWithCustomHook from "./useState/CounterAppWithCustomHook";
// import './index.css'
// import { SimpleForm } from './useState/SimpleForm';
// import { FormWithCustomHook } from './hooks/useEffect/FormWithCustomHook';
// import {MemorizeHook} from "./06-memo/MemorizeHook";

// import "./08-useReducer/intro-reducer";

import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
{/*   
  <React.StrictMode> */}
    <MainApp />
  {/* </React.StrictMode>
   */}
  </BrowserRouter>
  
  
  
)
