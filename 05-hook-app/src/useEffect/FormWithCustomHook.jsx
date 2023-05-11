
import React, { useEffect } from 'react';
import { useForm } from "./useForm";
// import { Message } from "../hooks/useEffect/Message";

 export const FormWithCustomHook = () => {

const {formState,onInputChange,onResetForm} = useForm({

    username:'',
     email:'',
     password:''
   });

 const {username,email,password } = formState;



useEffect(()=>{

console.log('useEffect called');

},[]);

useEffect(()=>{

  console.log('formState called');
  
  },[username]);

  return (
    <>
      <h1>Formulario con hook Simple</h1>
<hr />

<input type="text"
       name='username'
       className="form-control"
       placeholder='user name'
       value={username}
       onChange={onInputChange}

/>

<input type="email"
       placeholder="abelfernandezparedes@gmail.com"
       className="form-control mt-2" 
       name="email"
       value={email}
       onChange={onInputChange}
      />
<input type="password"
       placeholder="contraseña"
       className="form-control mt-2" 
       name="password"
       value={password}
       onChange={onInputChange}
      />      

<button onClick={onResetForm} className="btn btn-primary mt-2" type="reset">Borrar</button>


{
    (username === 'abel2') && <Message/> 
  }
    </>

)
 }

