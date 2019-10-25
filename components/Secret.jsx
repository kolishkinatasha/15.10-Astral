import React from 'react';
import './Style.css';


const Secret = (props) => console.log('SecretProps: ', props) || (
    <>
    <h3>Secret Page </h3>
    <p>This page is available for you!</p>
    </>
);

export default Secret;
