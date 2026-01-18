import Image from "next/image";
import {Listcors} from "./Components/Listcors"
import { Header } from "./navbar/header/Header";
import Carddor from "./Components/Carddor"
import Doretaraf from "./Components/Doretaraf" 
import Newdore from "./Components/Newdore"
import Hoxhelp from "./Components/Hoxhelp"
import Lickecors from "./Components/Lickecors"
import Textend from "./Components/Textend"
import Footer, {} from "./navbar/header/Footer"
export default function Home() {
  return (
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
  );
}
