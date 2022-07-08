import React, {useState} from "react";

export default function Form (){
    const [nombre, setNombre] = useState('');;
    const [apellido, setApellido] = useState('');;

    const Validar =(event)=>{
        event.preventDefault();
        if(!nombre.trim()){
            console.log('el camp nombre esta vacio')
        }
        if(!apellido.trim()){
            console.log('el campo apellido esta vacio')
        }
    }

    return(
        <div className="container">
            <form className="form-group" onSubmit = {Validar}>
                <h2>Titulo de nuestro primer proyecto</h2>
                <input 
                    type="text" 
                    className="form-control mb-3" 
                    placeholder="ingrese nombre"
                    onChange = {(e)=>{setNombre(e.target.value)}}
                />
                <input 
                    type="text" 
                    className="form-control mb-3" 
                    placeholder="ingrese apellido" 
                    onChange = {(e)=>{setApellido(e.target.value)}}
                />
                <button 
                    className="btn btn-primary" 
                    type="submit"
                >
                    Submit
                </button>
            </form>   
        </div>

    );
}