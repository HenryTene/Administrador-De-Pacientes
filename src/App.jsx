import { useState } from "react";

import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import Header from "./components/Header";

function App() {

  const [pacientes, setPacientes] = useState([]);

 

  return (
    <div className="container mx-auto mt-5">
      <Header
      numeros ={1}
       />
      <div className="mt-12 md:flex">
        <Formulario 
        setPacientes={setPacientes}
        pacientes={pacientes}
        />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
