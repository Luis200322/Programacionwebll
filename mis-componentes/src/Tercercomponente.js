import React from 'react'


export const Tercercomponente = (nombre, apellido,ficha) => {

  console.log(props);

   const libros= ["Harry Potter", 
    "Hielo y fuergo", 
    "El señor de lo de los anillos"];


  return (
    <div>
      <h2>mis libros favoritos</h2>

      <ul>
        <li>{libros [0]}</li>
        <li>{libros [1]}</li>
        <li>{libros [2]}</li>
      </ul>

      <hr/>
      <h2>Libros leidos</h2>
      <ul>
        {
            libros.map((libro ,indice)=>{
                return <li key={indice}>{libro}</li>
            })
        }
      </ul>
      <hr>
      <h2>
        Ficha medica
      </h2>
      <ul>
        <li><strong>Nombre: </strong>{nombre}</li>
        +<li><strong>Apellido:</strong>{apellido}</li>
        <li><strong>Alergias</strong>{ficha.Alergias}</li>
        <li><strong>Grupo sanguineo</strong>{ficha.gruposangre}</li>
        <li><strong>Estado de salud</strong>{ficha.estadodesalud}</li>
        <li><strong>Altura</strong>{ficha.altura}</li>
      </ul>
      </hr>
    </div>
  )
}


