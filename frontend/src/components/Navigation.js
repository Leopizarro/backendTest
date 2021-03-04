import React from 'react';


const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn === true){
        return(
            <nav className="bg-black" style={{display: 'flex', justifyContent:'flex-end'}}>
                <p className='f5 link dim underline white pa3 pointer ' onClick={() => onRouteChange('home')}>Home</p>
                <p className='f5 link dim underline white pa3 pointer ' onClick={() => onRouteChange('profile/:id')}>My Profile</p>
                <p className='f5 link dim underline white pa3 pointer ' onClick={() => onRouteChange('signout')}>Sign Out</p>
            </nav>
        )
    } else {
    return (
        <nav className="bg-black" style={{display: 'flex', justifyContent:'flex-end'}}>
            <p className='f5 link dim underline white pa3 pointer ' onClick={() => onRouteChange('register')}>Register</p>
            <p className='f5 link dim underline white pa3 pointer ' onClick={() => onRouteChange('signin')}>Sign In</p>
        </nav>
    )
    }
}

export default Navigation;