import React, { Component, useState, useEffect } from 'react';

function Signin({onRouteChange, loadUser, isSignedIn}){
    const [SignInEmail, setSigninEmail] = useState('');
    const [SignInPassword, setSigninPassword] = useState('');

    const onEmailChange = (event) => {
        setSigninEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setSigninPassword(event.target.value);
    }

    const submitSignIn = () => {
        fetch('http://localhost:3002/signin',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: SignInEmail,
                password: SignInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id){
                    console.log(user, isSignedIn);
                    loadUser(user);
                    onRouteChange('home');
                }
            })
    }

        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                onChange={onEmailChange}
                                type="email" 
                                name="email-address"  
                                id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                onChange={onPasswordChange}
                                type="password" 
                                name="password"  
                                id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={submitSignIn} type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                        <a href="#0" className="f6 link dim black db" onClick={() => onRouteChange('register')}>Sign up</a>
                        </div>
                    </div>
                </main>
            </article>
        );

    }

export default Signin;