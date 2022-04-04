import React, {useState} from 'react';
import '../css/login.css';
import axios from 'axios';
import { Link ,Redirect } from 'react-router-dom';
export default function Login(props) {
    const [password,setPassword] = useState('');
    const [userName,setUsername] = useState('');
    const [redirect,setRedirect]= useState(false);


    const login = async (e) => {

            const res = await axios.post(
                "http://localhost:5000/profile/login",JSON.stringify({'username':userName, 'password':password}),
                {headers: {
                    'Content-Type': 'application/json',
},}
            );

            console.log(res);
        let data = await res


        if (res.status === 200){
            // setUser(data)
            // setUserProfile(jwt_decode(data.access))
            // localStorage.setItem('token', data.access);
            window.localStorage.setItem('user',res.data.username)
            window.localStorage.setItem('id_user',res.data.id)
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
            <div className="row" id="login" >
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-4" id="tarjeta_login">
                        <div className="card-header">
                            <h1 className='title1'>Inicio de sesión</h1>
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-4">
                                <span className="input-group-text" id="basic-addon1">👤</span>
                                <input type="email" className="form-control" placeholder="Ingrese su nombre de usuario" aria-label="Username" aria-describedby="basic-addon2" onChange={(e)=>setUsername(e.target.value)}/>
                            </div>

                            <div className="input-group mb-4">
                                <span className="input-group-text" id="basic-addon1 tarjeta_login" >🔒</span>
                                <input type="password" className="form-control" placeholder="Ingrese su contraseña" aria-label="clave" aria-describedby="basic-addon2" onChange={(e)=>setPassword(e.target.value)}  />
                            </div>
                            <div class="d-grid gap-4">
                    
                                <button class="btn btn-primary" type="button" onClick={login}>Iniciar sesión</button>
                               
                                <div className="card-footer">
                                <Link to='/register'>
                                    <button type="button" className="btn btn-primary">Registrarse</button>
                                 </Link>   
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
