import React from 'react';
import { Link } from 'react-router-dom'
const Chaza = ({ id, chazaData, delChaza }) => {

    const { title,content} = chazaData;

    const del = () => {
        delChaza(id);

    }
    return (
        <div className="col">
        <div className="card mx-auto mb-3">

            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>

            <div className="card-body">
                <label className="card-text text-start">{content}</label>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-light btn-sm" >
                    <Link color='white' to='/crearArticles'>Añadir Producto</Link>
                </button>
                <button type="button" className="btn btn-danger btn-sm" onClick={del}>
                    Eliminar
                </button>
                
                
                
            </div>
        </div>
        </div>

    );

}

export default Chaza;