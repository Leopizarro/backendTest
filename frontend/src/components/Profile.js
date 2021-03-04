import React from 'react';

const Profile = ({user}) => {

    return (
        <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
            <div class="tc">
                <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                <h1 class="f3 mb2">Mimi W.</h1>
                <h2 class="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
                <h2 class="f5 fw4 gray mt0">Nombre: {user.nombre}</h2>
                <h2 class="f5 fw4 gray mt0">Apellido: {user.apellido} </h2>
                <h2 class="f5 fw4 gray mt0">Username: {user.username}</h2>
                <h2 class="f5 fw4 gray mt0">Email: {user.email}</h2>
                <h2 class="f5 fw4 gray mt0">Comuna: {user.comuna}</h2>
                <h2 class="f5 fw4 gray mt0">Direccion: {user.direccion}</h2>

            </div>
        </article>
    )
}

export default Profile;