import { Link,NavLink } from "react-router-dom"

export const Navbar = () => {
  return (

<nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded-3">
  <Link className="navbar-brand active" to="/">useContex</Link>

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink 
      to="/"
      className={({isActive})=>`nav-link ${isActive? 'active' : ''} `
       }> Home</NavLink>

     <NavLink 
      to="/About"
      className={({isActive})=>`nav-link ${isActive? 'active' : ''} `
       }>About</NavLink>
            <NavLink 
      to="/Login"
      className={({isActive})=>`nav-link ${isActive? 'active' : ''} `
       }>Login</NavLink>

    </div>
  </div>
</nav>
 )
}

