
import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import Modals from "./components/Modals";

import SelectsAnidados from "./components/SelectsAnidados";
import SongSearch from "./components/SongSearch";
/*
const initialDb = [
  {
    "id": 1,
    "name": "Seiya",
    "constellation": "Pegaso"
  },
  {
    "id": 2,
    "name": "Shiryu",
    "constellation": "Dragón"
  },
  {
    "id": 3,
    "name": "Hyoga",
    "constellation": "Cisne"
  },
  {
    "id": 4,
    "name": "Shun",
    "constellation": "Andrómeda"
  },
  {
    "id": 5,
    "name": "Ikki",
    "constellation": "Fenix"
  }
]*/


function App() {
  return (
    <>
    <Modals/>
   <ContactForm/>
  
  {/*
    <SelectsAnidados/>
      <h1>Ejercicios React</h1>
       <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp /> */}
    </>
  );
}

export default App;
