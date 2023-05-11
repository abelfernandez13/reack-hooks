import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'


 export const initialState=[
  
{
id:new Date().getTime(),
description:'recolectar la piedra del alma',
done:false
},
 {
  id:new Date().getTime()*3,
   description:'recolectar la piedra del tiempo',
   done:false
 }
]


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

   const [todos, dispatch] = useReducer(todoReducer ,initialState,init);
    
    useEffect(() => {
     
    localStorage.setItem( 'todos', JSON.stringify(todos))
    
    }, [todos])
    

    const handleNewTodo=(todo)=>{ 
  
      const action = {

        type:'[TODO] add todo',
        payload: todo
      }
 
      dispatch(action);
    }
    
    const handleDeleteTodo=(id)=>{ 
  
      const action=({

        type:'[TODO] remove todo',
        payload: id
      })
      
      dispatch(action);
    }
    const handleToggleTodo=(id)=>{ 
  
      const action=({

        type:'[TODO] toggle todo',
        payload: id
      })
      
      dispatch(action);
    }

  return (
     <>
<h3>todoApp:10 <small>pendientes:2</small></h3>
<hr />
   <div className="row">
     <div className='col-5' >
     <TodoList todos={todos}  onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}  />
        </div>


        <div className='col-7'>
         
          <h3>Agregar</h3>
           <hr />
          
          <TodoAdd onNewTodo={handleNewTodo}/>


        </div>
        </div>


     </>  
    
    )
}

