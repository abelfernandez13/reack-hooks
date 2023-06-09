import React from 'react'
import {useFetch} from '../hooks/useFetch'
import {useCounter} from '../hooks/useCounter'
import { LoadingQuote } from '../useState/LoadingQuote'
import { Quote } from '../useState/Quote'
import { useLayoutEffect } from 'react'



export const Layout = () => {
 
    useLayoutEffect(()=>{

     

    },[]);




  const{counter, increment } = useCounter(1) 

  const {data,isLoading,hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); 

  const {author,quote} = !!data && data[0]; 
 
return (
<>
   <h1>breakingbad</h1>
   <hr />

  {  ////// Ternario
      isLoading
         ?<LoadingQuote/>
         :<Quote  author={author} quote={quote} />
          
  }

 <button className="btn btn-primary"  onClick={()=>{ increment() }}  >Next Qoute</button>
 </>
 
  )
}
