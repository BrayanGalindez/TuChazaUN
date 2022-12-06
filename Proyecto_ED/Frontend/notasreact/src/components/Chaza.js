import React from 'react';

const Chaza = ({ id, chazaData, delChaza }) => {

    const { title,content } = chazaData;
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
                <button type="button" className="btn btn-danger btn-sm" onClick={del}>
                    Eliminar
                </button>
            </div>
        </div>
        </div>

    );

}

export default Chaza;