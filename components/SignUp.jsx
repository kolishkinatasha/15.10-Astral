import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Style.css';

let onSubmit = (e) => {
     e.preventDefault();
     Axios.post('/user', state)
     .then(res => {
         users.push(JSON.parse(res.config.data));
     });
     console.log('state - ', state);
 };
 
 let state = {
     login: '',
     password: '' 
 };
 
 let users = [];
 
 let changeValue = field => ({ target }) => {
     state[field] = target.value;
     console.log(state);
 };
 

const SignUp = (props) => console.log('SignUp',props) || (
  
     <>
          <form onSubmit={onSubmit}   style={{ display: 'flex', flexDirection: 'column'}}>
               <h3>SignUp Page</h3>
               <label>Login
                    <input onChange={changeValue('login')} type='text' name="Login"></input>
               </label>
               <label>Password
                    <input onChange={changeValue('password')} type='password' name="Password"></input>
               </label>

               <input type='submit' style={{ width: "100px" }} value='Sign Up'></input>
               <p>Do you already have an account?</p> 
               <Link to="/Login">Login</Link>  
          </form> 
     </>
);

  export  { SignUp, users };
