import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../Global';
import Chaza from './Chaza';

const Chazas = () => {

    const [Chazass, setChazass] = useState([]);
    const url = Global.url;

    useEffect(() => {
        getChazass();
        console.log(Chazass);
    }, [Chazass.length]);


    //Obtenemos los artículos

    const getChazass = () => {
        axios.get(url + "Chazass").then(res => {
            setChazass(res.data.Chazass);
        });
    }

    //Eliminamos un artículo por su id

    const deleteChazas = (id) => {
        const idChazas = Chazass[id]._id;
        axios.delete(url + "delete/" + idChazas).then(res => {
            getChazass();
        });
    }

    return (

        <div className="publicaciones">
            <h1 className="mt-5">Chazas</h1>
            <br /><br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    {
                        Chazass.length > 0 ? (

                            Chazass.map((Chazas, i) => {

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