import React, {useState} from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
/* const Form = () => {
	const[tareas, addtarea] = useState(["tarea 1", "tarea2", "tarea3","tarea4"]);
	return (
		<div className="fondo">
			
			<div className= "task">
			 <div className= "ma"><h1 className="titulo">Todo List!
			  <span className="material-symbols-outlined"> check_box</span></h1></div>
			<input type={'text'} />
			{tareas.map((valor, indice, arr)=>{
				return <li key={indice}>{valor}
				<button>Eliminar</button></li>;
			})}
			{tareas.length} Tareas Faltantes
			
		    </div>
		</div>
	);
};

export default Form; */



//create your first component
const Form = (props) => {
    const [inputText, setInputText] = useState("");
    const [validacion, setValidacion] = useState(true);
    const formulario = (event) => {
        setInputText (event.target.value);
        /* console.log(input); */
    };
    const submit = (event) => {
        event.preventDefault();
        if(inputText.trim() !== ""){
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }
    };
    return (
        <div className="text-center">
            <form className="formulario" onSubmit={submit}>
                <input className='cuadro' value={inputText} onChange={formulario} placeholder='What should you do?'/>
                <button className="addTask">Add Task</button>
            </form>
			
        </div>
    );
};

Form.propTypes= {
    nuevaTarea:PropTypes.string
  };
  
export default Form;
