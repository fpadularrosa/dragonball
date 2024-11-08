import React, { useEffect, useState } from 'react';

const Personajes = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(_ => {
        fetch(`${window.API_URL}/`)
        .then(response => response.json())
        .then(data => setPersonajes(data));
    }, []);

  return <div>
    {!personajes?.items ? <h1>No hay personajes</h1> : personajes.items.map(personaje => (
        <div key={personaje.id} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <img src={personaje.image} alt={personaje.name} style={{width: '200px', height: '250px'}}/>
            <h2>Nombre: {personaje.name}</h2>
            <h2>Ki: {personaje.ki}</h2>
            <h2>Raza: {personaje.race}</h2>
            <h2>Género: {personaje.gender === 'Male' ? 'Masculino' : 'Femenino'}</h2>
        </div>
    ))}
  </div>;
};

export default Personajes;
