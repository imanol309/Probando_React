import "./style.css";
import api_Get_mortin from "./services"
import api_Get_Plazi from "./servicesPlazi"
import React,{ useEffect, useState } from "react";

export default function App() {
  const [characters, setCharacters] = useState([])
  const [categories, setcategories] = useState([])

  useEffect(()  => {
    api_Get_mortin()
        .then((data) => setCharacters(data))
        .catch((error) => console.log(error))
    
  },[])

  useEffect(()  => {
    api_Get_Plazi()
        .then((data) => {console.log(data),setcategories(data)})
        .catch((error) => console.log(error))
  },[characters])

  return (
    <div className="App">
      <div className='fetchOne'>
        <h1>The Rick and Morty API</h1>
        {
          characters.length > 0 ? (
            characters.map(({id, name, status, image}) => (
              <div key={id}>
                <div className='informa_Api'>
                  <h4> Mi Nombre es: <span className='color'>{name}</span></h4>
                  <h4> Mi Estatus es: <span className='color'>{status}</span></h4>
                </div>
                <img src={image} alt={name} />
              </div>
            ))
          ) : (
            <div>
              <h4>Cargando....</h4>
            </div>
          )
        }
        </div>
        <div className='fetchOne'>
        <h1>Get categories</h1>
          {
            categories.length > 0 ? (
              categories.map(({id, name, image}) => (
                <div key={id}>
                  <div className='informa_Api'>
                    <h4> Mi Nombre es: <span className='color'>{name}</span></h4>
                  </div>
                  <img src={image} alt={name}  />
                </div>
              ))
            ) : (
              <div>
                <h4>Cargando....</h4>
              </div>
            )
          }
        </div>
    </div>
  );
}
