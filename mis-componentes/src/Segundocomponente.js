import React from 'react'

export const Segundocomponente = () => {

       let nombre = 'Manuel';
       let web = 'http://manuel.com'

       ////Declaracion de objetos
       let usuario={
        nombre: "Luis",
        apellido: "Segundo",
        edad: 21,
        ciudad: "Libres"
       };
///imprimir en consola
console.log(usuario);

  return (
    <div>
     <hr />
     <h2>Datos del usuario</h2>
     <ul>
        <li>Nombre: {nombre} </li>
        <li>web:  {web} </li>
     </ul>
     <hr />

     <h2>Datos de un objeto</h2>
     <ul>
        <li>Nombre: <strong>{usuario.nombre}</strong></li>
        <li>Apellido: <strong>{usuario.apellido}</strong></li>
        <li>Edad: <strong>{usuario.edad}</strong></li>
        <li>Ciudad: <strong>{usuario.ciudad}</strong></li>
     </ul>
    </div>
  )
}


