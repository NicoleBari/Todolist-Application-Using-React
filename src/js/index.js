//import react into the bundle
import React, { useState }from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Form from "./component/Form.jsx";
import Task from "./component/Task.jsx";

const Index = () => {
    const [listaTareas, setListaTareas] = useState([]);
    const nuevaTarea = (tarea) => {
        setListaTareas([tarea, ...listaTareas]);
    };
    /* console.log(listaTareas); */
    const borrar = (id) => {
        const listaFiltrada = listaTareas.filter((e, index) => index !== id);
        setListaTareas(listaFiltrada);
    };
    return (
        <div className="fondo"> 

            <div className="task">
               <div className="margen"><h1 className="text-center">Todo List!<i className="material-symbols-outlined">
                  rocket_launch</i></h1>
                </div>
                
              <Form nuevaTarea={nuevaTarea} />
              
              <hr className="separator"/>
              {listaTareas.map((e, index) => (
                <Task key={(index)} tarea={e} borrar={borrar} id={index} />
              ))}
              <div className="tareasFaltantes">{listaTareas.length} Tareas Faltantes</div>
            </div>
        </div>
    );
};

export default Index;



//render your react application
ReactDOM.render(<Index />, document.querySelector("#app"));
