import React, {useState} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Global from '../Global';

const Newchaza = () => {
    const url = Global.url;
    const [chaza, setChaza] = useState({
        title: null,
        content: null,
    });

    const [redirect, setRedirect] = useState(false);

    //Referencia de los datos del formulario:
    let titleRef = React.createRef();
    let contentRef = React.createRef();

    const changeState = () => {
        setChaza({
            title: titleRef.current.value,
            content: contentRef.current.value
        });

        console.log(chaza);
    }
    const sendData = (e) => {
        //Evitamos que al recibir los datos se recargue la pantalla
        e.preventDefault();
        changeState();
        //Peticion HTTP por POST para guardar el articulo
        axios.post(url + 'saveChaza', chaza).then(res => {
            setRedirect(true);
            console.log(res.data);
        });
    }
    if(redirect){
        return <Navigate to="chazas" />;
    }


    return(

        <div className="nueva-chaza">

            <div id="formulario" className="card mx-auto mb-3 mt-5" style={{width: '30em'}}>

                <div className="card-header text-dark">

                    <h4>Crear nueva chaza</h4>

                </div>
                
                <div className='card-body'>

                    <form onSubmit={sendData}>

                        <div className='mb-3'>

                            <label>Nombre</label>
                            <input type="text" className="form-control" id="title" name="title" ref={titleRef} onChange={changeState} required />

                        </div>
                        <div className='mb-3'>
                            <label>Describe tu chaza</label>
                            <textarea className="form-control" id="content" name="content" ref={contentRef} onChange={changeState} rows="6" cols="30" required />

                        </div>

                        <div className='mb-3'>
                            <input className="form-control btn btn-primary" type="submit" id="publish" value="Abrir chaza" />

                        </div>
                    </form>

                </div>

            </div>

        </div>

    );
}
export default Newchaza;