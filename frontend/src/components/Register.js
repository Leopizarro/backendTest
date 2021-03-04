import React, {Component, useState, useEffect} from 'react';

function Register({onRouteChange, loadUser}) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const [comuna, setComuna] = useState('');
    const [direccion, setDireccion] = useState('');


    const onNombreChange = (event) =>{
        setNombre(event.target.value);
    }

    const onApellidoChange = (event) =>{
        setApellido(event.target.value);
    }

    const onUsernameChange = (event) =>{
        setUsername(event.target.value);
    }

    const onEmailChange = (event) =>{
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) =>{
        setPassword(event.target.value);
    }

    const onComunaChange = (event) =>{
        setComuna(event.target.value);
    }

    const onDireccionChange = (event) =>{
        setDireccion(event.target.value);
    }

    const onRegisterSubmit = () =>{
        fetch('http://localhost:3002/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                username: username,
                email: email,
                password: password,
                comuna: comuna,
                direccion: direccion
            })
        })
            .then(response => response.json())
            .then(user =>{
                if(user.id){
                    loadUser(user);
                    onRouteChange('home');
                }
            })
    }


        return(
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register New User</legend>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="nombre">Nombre</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                onChange={onNombreChange}
                                type="text" 
                                name="nombre"  
                                id="nombre" 
                                />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="apellido">Apellido</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                onChange={onApellidoChange}
                                type="text" 
                                name="apellido"  
                                id="apellido" 
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                 onChange={onUsernameChange}
                                type="text" 
                                name="username"  
                                id="username" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                onChange={onEmailChange}
                                type="email" 
                                name="email-address" 
                                id="email-address" 
                                />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                onChange={onPasswordChange}
                                type="password" 
                                name="password"  
                                id="password" 
                                />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="comuna">Comuna</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                onChange={onComunaChange}
                                type="text" 
                                name="comuna"  
                                id="comuna" 
                                />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="direccion">Direccion</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                onChange={onDireccionChange}
                                type="text" 
                                name="direccion"  
                                id="direccion" 
                                />
                        </div>
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            onClick={onRegisterSubmit} 
                            type="submit" value="Register" 
                            />
                        </div>
                    </div>
                </main>
            </article>
        )
    }

export default Register;