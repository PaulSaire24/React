import React, {Fragment, useState} from "react";

export default function  Contador(){
    const [cont, steCont] = useState(0);
    const sumar =()=>{
        steCont(cont+1);
    }
    const restar =()=>{
        steCont(cont-1);
    }
    //======
    return(
        <Fragment>
            <h2>Hola mundo</h2>
            <h3>el contador es: {cont}</h3>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>Restar</button>          
        </Fragment>
    );

}

