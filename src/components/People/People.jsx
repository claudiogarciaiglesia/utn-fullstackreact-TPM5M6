import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';


const People = () => {
    
    const baseUrl = process.env.REACT_APP_API_URL;
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [persona, setPersona] = useState({
        nombre: '',
        apellido: '',
        alias: '',
        email: ''
    });

    const manejarForm = (event) => {
        const { name, value } = event.target;

        setPersona(prevPersona =>({
            ...prevPersona,
            [name]: value
        }))
    }

    const submit =  async (event) => {
        event.preventDefault();
        const url = `${baseUrl}persona`;
        console.log('url: ', url)

        try {
            const response = await axios.post(url, persona);
            console.log('RESpONSE: ', response)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <button onClick={()=> setModalIsOpen(true)}>Agregar persona</button>
            <Modal isOpen ={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
                <form onSubmit={submit}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" value={persona.nombre} name='nombre' onChange={manejarForm} required/>
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input type="text" value={persona.apellido} name='apellido' onChange={manejarForm} required/>
                    </div>
                    <div>
                        <label>Alias</label>
                        <input type="text" value={persona.alias} name='alias' onChange={manejarForm} required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={persona.email} name='email' onChange={manejarForm} required/>
                    </div>
                    <button>Agregar</button>
                    <button onClick={()=> setModalIsOpen(false)}>Cerrar</button>
                </form>
            </Modal>
        </div>
    );
};




export default People;