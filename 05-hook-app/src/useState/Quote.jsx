import { useState } from "react";
import { useRef } from "react"
import { useLayoutEffect } from "react"


export const Quote = ({quote,author}) => {

 const pref = useRef();

  const[boxSize, setBoxsize] = useState({with:0 , height:0})


  useLayoutEffect(()=>{

    console.log(pref.current.getBoundingClientRect())
    
    const{ width , height }=pref.current.getBoundingClientRect();

   setBoxsize({width, height});


  },[quote])

  return (
     <>

<blockquote className="blockquote text-end">
       <p ref={pref} className="mb-1">{quote}</p>
       <footer className="blockquote-foter" >{author}</footer>
     
     </blockquote> 
 <code > {JSON.stringify(boxSize)} </code>

     </>
  )
}


