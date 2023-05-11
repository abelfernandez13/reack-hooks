

import React, { useEffect, useState } from 'react';
import { Message } from "../hooks/useEffect/Message";

 export const SimpleForm = () => {

  const [formState, setFormState ] = useState({

   username: "abel",
   email:"abelfernandezparedes@gmail.com"
  })

  const {username,email } = formState

  const onInputChange =({target})=>{

    const {name, value } = target;

    setFormState({
    ...formState,
       [name] :value

  })
  };

useEffect(()=>{

console.log('useEffect called');

},[]);

useEffect(()=>{

  console.log('formState called');
  
  },[username]);

  return (
    <>
      <h1>Formulario Simple</h1>
<hr />

<input type="text"
       name='username'
       className="form-control"
       placeholder='user name'
       value={username}
       onChange={onInputChange}

/>

<input  type="email"
       placeholder="abelfernandezparedes@gmail.com"
       className="form-control mt-2" 
       name="username"
       value={email}
       onChange={onInputChange}
      />

{
    (username === 'abel2') && <Message/> 
  }
    </>

)
 }

