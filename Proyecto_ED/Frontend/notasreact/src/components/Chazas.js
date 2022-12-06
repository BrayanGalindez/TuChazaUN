import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../Global';
import Chaza from './Chaza';

const Chazas = () => {

    const [chazas, setChazas] = useState([]);
    const url = Global.url;

    useEffect(() => {
        getChazas();
        console.log(chazas);
    }, [chazas.length]);


    //Obtenemos los artículos

    const getChazas = () => {
        axios.get(url + "chazas").then(res => {
            setChazas(res.data.chazas);
        });
    }

    //Eliminamos un artículo por su id

    const deleteChazas = (id) => {
        const idChazas = chazas[id]._id;
        axios.delete(url + "deleteChaza/" + idChazas).then(res => {
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

                            chazas.map((Chazas, i) => {

                                return (
                                    <Chazas
                                        key={i}
                                        id={i}
                                        ChazasData={Chazas}
                                        delChazas={deleteChazas}

                                    />
                                );
                            })

                        ) : (

                            <h3 className="mx-auto">No hay chazas en este momento</h3>

                        )}
                </div>
            </div>
        </div>

    );
}

export default Chazas;