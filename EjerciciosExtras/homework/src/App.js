import React from "react";
// import Buscador from "./components/Buscador/Buscador";

import NavBar from "./components/NavBar/NavBar";
import UserPosts from "./components/UserPosts/UserPosts";
import Users from "./components/Users/Users";


function App() {
  return (
      <React.Fragment>
         <NavBar />
         {/* <Buscador/> */}
         <Users/>
         <UserPosts/>

        
      </React.Fragment>
  )
}

export default App
