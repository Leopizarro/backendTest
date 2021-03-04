import React, {Component} from 'react';

const UserList = ({onRouteChange}) => {
    let users = [
        {
            id:"01",
            nombre:"Nombre1",
            apellido:"Apellido1",
            password:"password1",
            comuna:"comuna1"
        },
        {
            id:"02",
            nombre:"Nombre2",
            apellido:"Apellido2",
            password:"password2",
            comuna:"comuna2"   
        }
    ];

    return(
        <div>
            {users.map(user => 
                <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5 pointer grow" onClick={() => onRouteChange(`profile/:id`)}>
                    <div>
                        <h4><strong>ID: </strong>{ user.id }</h4>
                    </div>
                    <div>
                        <h4><strong>Nombre: </strong>{ user.nombre}</h4>
                    </div>
                    <div>
                        <h4><strong>Apellido: </strong>{ user.apellido}</h4>
                    </div>
                    <div>
                        <h4><strong>Comuna: </strong>{ user.comuna} </h4>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserList;

