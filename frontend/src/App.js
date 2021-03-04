
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Signin from './components/Signin';
import Register from './components/Register';
import Navigation from './components/Navigation';
import UserList from './components/UserList';
import Profile from './components/Profile';
import Error from './components/Error';

function App() {
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
      id: '',
      nombre: '',
      apellido: '',
      username: '',
      email: '',
      /* password: '', */
      comuna: '',
      direccion: '',
      joined: ''
    });
  console.log(isSignedIn, user, route);

  const loadUser = (data => {
    setUser({
        id: data.id,
        nombre: data.nombre,
        apellido: data.apellido,
        username: data.username,
        email: data.email,
        /* password: data.password, */
        comuna: data.comuna,
        direccion: data.direccion,
        joined: data.joined
    })
  })

  const onRouteChange = (route) => {
    if(route === 'signout'){
      setIsSignedIn(false);
      setUser({
        id: '',
        nombre: '',
        apellido: '',
        username: '',
        email: '',
        /* password: '', */
        comuna: '',
        direccion: '',
        joined: ''
      });
      setRoute("signin");
    console.log(user, isSignedIn, route);
    }else if(route === 'home'){
      setIsSignedIn(true);
    }
      if(route === 'signout'){
        setRoute('signin');
      }else{
        setRoute(route);
      }
  }

  return (
    <div className="App">
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      { route === 'signin'
      ? <Signin onRouteChange={onRouteChange} loadUser={loadUser} isSignedIn={isSignedIn} />
      : route === 'register'
      ? <Register onRouteChange={onRouteChange} loadUser={loadUser} />
      : route === 'home'
      ? <UserList onRouteChange={onRouteChange}/>
      : route === 'profile/:id'
      ? <Profile user={user}/>
      : <Signin onRouteChange={onRouteChange} />
  }
    </div>
  );
 }


export default App;
