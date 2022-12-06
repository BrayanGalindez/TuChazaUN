import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chaza from './Chaza';
import Global from '../Global';

const Chazas = () => {
    const [chazas, setChaza] = useState([]);
    const url = Global.url;
    
    useEffect(() => {
        getChazas();
        console.log(chazas);
    }, [chazas.length]);


    //Obtenemos las chazas

    const getChazas = () => {
        axios.get(url +"getChaza").then(res => {
            setChaza(res.data.chazas);
        });
    }

    //Eliminamos un artículo por su id

    const deleteChazas = (id) => {
        const idChaza = chazas[id]._id;
        axios.delete(url +"deleteChaza/" + idChaza).then(res => {
            getChazas();
        });
    }

    return (

        <div className="publicaciones">
            <h1 className="mt-5">Chazas</h1>
            <br /><br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    {
                        chazas.length > 0 ? (

                            chazas.map((chaza, i) => {

                                return (
                                    <Chaza
                                        key={i}
                                        id={i}
                                        chazaData={chaza}
                                        delChaza={deleteChazas}

                                    />
                                );
                            })

                        ) : (

                            <h3 className="mx-auto">No hay artículos que mostrar</h3>

                        )}
                </div>
            </div>
        </div>

    );
}

export default Chazas;