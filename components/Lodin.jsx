import React from 'react';
import { Link } from 'react-router-dom';
import { users } from './SignUp';
import './Style.css';

let onSubmit = (e) => {
   e.preventDefault();
   for(let i = 0; i < users.length; i++) {
       if(state.password === users[i].password &&
          state.login === users[i].login) {
               authoFlag = true;
               console.log('authoFlag - ', authoFlag);
          }
   }
   console.log('users - ', users);
};

let state = {
   login: '',
   password: '' 
};

let authoFlag = false;

let changeValue = field => ({ target }) => {
   state[field] = target.value;
   console.log(state);
};

const Login = (props) => console.log('Login: ', props) || (
   <>
      <form onSubmit={onSubmit} style={{display:'flex', flexDirection: 'column'}} >
         <h4 >Log In</h4>
         <label>Login
            <input onChange={changeValue('login')} type='text'></input>
         </label>
         <label> Password
            <input onChange={changeValue('password')} type='password'></input>
         </label>
         <input type='submit' value="Logi In" style={{ width: "100px" }}></input>

         <p>Don't have an account?</p> 
         <Link to="/SignUp">Sign up</Link>
      </form>
    </>
);

export  { Login, authoFlag };
