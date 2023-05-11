import  PropTypes  from "prop-types";
import { useState } from "react";


const getResul=()=>{
return 'Abel Fernandez'  
}

export const FirstApp = ({title,subtitle})=> {

    return ( 
  <>
  <h1>{title}</h1>
  <p>{subtitle}</p>
  <button onClick={()=>{console.log(1)}} >+1</button>
  </>
) }

FirstApp.propTypes={

title:PropTypes.string.isRequired,
subtitle:PropTypes.number.isRequired

}

FirstApp.defaultProps={

  title :'Hola fkdfgdlfkgjl',
  subtitle:546546,
  edad:123


}