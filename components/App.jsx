import React from 'react';
import {BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import './Style.css';

import Secret from './Secret';
import Home from './Home';
import { Login, authoFlag } from './Lodin';
import { SignUp } from './SignUp';
import NotFound from "./NotFound";


const homeProps = {example: 'home'};
const SecretProps = {example: 'Secret'};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        authoFlag === true
        ? <Component {...props} /> 
        : <Redirect to="/Home" />
    )} />
);

const login = () => (
    authoFlag === true 
    ? <div>Вы Вошли!</div>
    : <div></div>
)

const App = () => (
    <BrowserRouter>
        <div className="header" >
            {/* style={{ display: 'flex', flexDirection: 'column' }} */}
                <NavLink activeStyle={{ color: 'gray'}} to="/" exact>Home page</NavLink>
                <NavLink activeStyle={{ color: 'gray'}} to="/Secret">Secret page</NavLink>
                <NavLink activeStyle={{ color: 'gray'}} to="/Login" >Login page</NavLink>
                <NavLink activeStyle={{ color: 'gray'}} to="/SignUp">SignUp page</NavLink>
                {login()}
        </div>

        <Switch>
            <Route exact path="/home" > <Home props={homeProps}/> </Route>
            <Route exact path="/" > <Redirect to="/home" /> </Route>
            {/* <Route exact path="/">
                <Redirect to="/Home" />
            </Route> */}
            <PrivateRoute  path="/Secret" component={Secret} />{/*//render={props => <Secret routerProps={props} SecretProps={SecretProps}/>}/> */}
            <Route path="/Login" component={Login}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;
