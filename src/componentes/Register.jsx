import React, {useState} from 'react';
import '../css/register.css';
import axios from 'axios';
import {Redirect} from "react-router-dom";
export default function Register(props) {
    const [password,setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');
    const [userName,setUsername] = useState('');
    const [name, setName] = useState('');
    const [redirect,setRedirect]= useState(false);


    const register = async (e) => {

            const res = await axios.post(
                "http://localhost:5000/register",JSON.stringify({'username':userName, 'password':password, 'name':name}),
                {headers: {
                        'Content-Type': 'application/json'
                    },}
            );
        if (res.status === 200){
            const res = await axios.post(
                "http://localhost:5000/profile/login",JSON.stringify({'username':userName, 'password':password}),
                {headers: {
                        'Content-Type': 'application/json',
                    },}
            );
            window.localStorage.setItem('user',res.data.username)
            window.localStorage.setItem('id_user',res.data.id)
            // setUser(data)
            // setUserProfile(jwt_decode(data.access))
            // localStorage.setItem('token', data.access);
            alert(res.data)
            setRedirect(true)
            // setUserLogin(true)

        }else{
            alert('Usuario o contraseña, icorrectos')
            /*            setError("Usuario o contraseña, icorrectos")
                        setTimeout(() => {
                            setError("")
                        }, 5000);*/
        }




    };

    return (
        <>
            {  redirect ?
                <Redirect to='/profile' />
                :
        <div className="register">
            <span data-mscc-ic="false" id="backgroundImageOverlay" className="overlay"></span>
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h1 className='title1'>Registro</h1>
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">👤</span>
                                <input type="name" className="form-control" placeholder="Ingrese su Nombre" aria-label="name" aria-describedby="basic-addon2" onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">👤</span>
                                <input type="email" className="form-control" placeholder="Ingrese su Nombre de Usuario" aria-label="Username" aria-describedby="basic-addon2" onChange={(e)=>setUsername(e.target.value)}/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">🔒</span>
                                <input type="password" className="form-control" placeholder="Ingrese su Contraseña" aria-label="clave" aria-describedby="basic-addon2" onChange={(e)=>setPassword(e.target.value)}  />
                            </div>
                            <div class="d-grid gap-2">

                                <button class="btn btn-primary" type="button" onClick={register}>Registrarse</button>
                                <button>Iniciar Sesion</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            }
        </>
    )
}
