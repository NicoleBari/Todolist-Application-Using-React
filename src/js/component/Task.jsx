import React, { useState } from "react";
import PropTypes from "prop-types";

const Task = (props) => {
  const borrarTarea = () => {
    props.borrar(props.id);
  };
  return (
    <div className="tarea">
      <div>
        <span className="añadirTarea">
          {props.tarea}
          <div className="iconos">
           {/*   <span className="tickTarea">
             <i className="material-symbols-outlined">task_alt</i>
              </span> */}
            
             <span className="borrarTarea" onClick={borrarTarea}>
             <i className="material-symbols-outlined">cancel</i> 
             </span>
          </div>

        </span>
        
      </div>
      
    </div>
   
  );
};

Task.propTypes= {
  id:PropTypes.number,
  borrar:PropTypes.func,
  tarea:PropTypes.string
};

export default Task;
