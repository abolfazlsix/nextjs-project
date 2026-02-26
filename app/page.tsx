import React from "react";
import Header, {} from "./navbar/header/Header"
import Listcors, {} from "./Components/Listcors"
import Carddor, {} from "./Components/Carddor"
import Lickecors, {} from "./Components/Lickecors"
import Hoxhelp, {} from "./Components/Hoxhelp"
import Newdore, {} from "./Components/Newdore"
import Doretaraf, {} from "./Components/Doretaraf"
import Textend, {} from "./Components/Textend"
import Footer, {} from "./navbar/header/Footer"
export default function App(){
  
  return(
   <div>
     <Header/>
    <Listcors/>
    <Carddor/>
   <Doretaraf/>
    <Hoxhelp/>
    <Newdore/>
     <Lickecors/>
     <Textend/>
     <Footer/>
   </div>
  )
}