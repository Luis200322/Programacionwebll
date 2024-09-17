import React, { useState } from 'react'

export const Mi_Estado = () => {
/*
    let nombre= "Manuel Hernandez";

    const CambiarNombre= (e)=>{
        nombre ="Tony";
    }*/

          const [nombre, setNombre]=useState("Manuel Hernandez");

          const CambiarNombre =(e, nombrefijo)=>{
        
            setNombre(nombrefijo);
          }
  return (
    <div>

<h3>componente: Mi_Estado</h3>
<p>Mi nombre es: <strong>{nombre}</strong></p>

<button onClick={CambiarNombre}>Cambiar Nombre</button>
<input type='text' placeholder='Cambiar nombre' onKeyUp={e => CambiarNombre(e, e.trget.value)}/>

    </div>
  )
}
