import { Navigate, Route, Routes,Link } from "react-router-dom"
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
  <>
<Navbar/>

    <hr />
   <Routes>
      <Route path="/" eLement={<HomePage/>}/>
      <Route path="AboutPage" eLement={<AboutPage/>}/>
      <Route path="LoginPage" eLement={<LoginPage/>}/>
      <Route path="/*" eLement={ <Navigate to ="AboutPage"/> } />
   </Routes>
  </>

  )
}
