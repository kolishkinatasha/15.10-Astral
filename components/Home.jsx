import React from 'react'
import { withRouter } from 'react-router-dom';
import { authoFlag } from './Lodin';
import './Style.css';

const login = () => (
    authoFlag === true 
    ? <div className="login">Вы Вошли!</div>
    : <div></div>
)

const Home = props => console.log('home props: ', props) || (
    <>
    <h3>Home Page</h3>
    {login()}
    </>
);

export default withRouter(Home);
