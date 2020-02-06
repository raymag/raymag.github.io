import React from 'react';
import Box from '../../components/Box';

import './styles.css';

export default function e404(){
    return (
        <Box bgColor="#222" color="#e5e5e5">
            <div className="container">
                <img src='./assets/kermit.png' id="kermit" alt="kermit"/>
                <div id="text-box">
                    <h1>OOPS! PAGE NOT FOUND.</h1>
                    <span>This page doesn't actually exists.<br/> <a href="/">back to home</a></span>   
                </div>
            </div>
        </Box>
    );
}