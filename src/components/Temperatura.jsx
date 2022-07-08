import React, {useState} from "react";

export default function Temparatura(){
    const [temp, setTemp] = useState(0);
    const subir =()=>{
        setTemp(temp + 1);
    }
    const bajar =()=>{
        setTemp(temp - 1);
    }

    return(
        <div>
            <h2>la temperatura es: {temp}</h2>
            <p>{temp >21 ? 'la temperatura es muy caliente': 'la temperartura es muy fria'}</p>
            <button className="btn btn-outline-danger" onClick = {subir}>subir</button>
            <button className="btn btn-outline-danger" onClick = {bajar}>bajar</button>        
        </div>
    );

}