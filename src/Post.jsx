import React, { useState } from 'react'

export const Post = () => {

    const [nam, setName] = useState("");
    const [job, setJob] = useState("");
    const [id, setId] = useState(0);


    const enviar = async(e) =>{
        e.preventDefault();

        try{

            const response = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nam, job })
            });
    
            const content = await response.json();
            console.log( content );

        }catch( error ){
            console.log(error.message);
        }
        
        
       
         
    }

    const eliminar = async(e) =>{
        e.preventDefault();
        
         const response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE'
         });

        console.log( response );
         
    }

    return (
        <div>
            <form onSubmit={enviar}>
                <h1>CRUD</h1>
                <hr />
                <input type='text' onChange={(e) => setName(e.target.value)}/>
                <hr />
                <input type='text' onChange={(e) => setJob(e.target.value)}/>
                <hr/>
                <button type='submit'>Enviar</button>
            </form>

            <hr/>
            <h2>ELIMINAR</h2>
            <form onSubmit={eliminar}>
                <hr />
                <h3>ID por eliminar</h3>
                <input type='number' onChange={(e) => setId(e.target.value)}/>
                <hr />
                <button type='submit'>Enviar</button>
            </form>

        </div>
    );
}
