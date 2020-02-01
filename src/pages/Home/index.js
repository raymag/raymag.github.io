import React from 'react';
import './styles.css';

import Box from '../../components/Box';
import Card from '../../components/Card';

export default function Home(){
    return (
        <Box title="Projects">
            <Card 
                title="PAD"
                to="https://pad-io.herokuapp.com/"
                body="Share and correct redactions"
                footer="PHP, Python, MongoDB, Javascript"
                thumbnail="./assets/projects/star.png"
            />
            <Card 
                title="BUTECO"
                to="https://buteco-io.herokuapp.com/"
                body="Have a nice chat from anywhere"
                footer="NodeJS, ExpressJS, SocketIO"
                thumbnail="./assets/icons/mango/icon-512x512.png"
            />
            <Card 
                title="DOTLAND"
                to="https://dotland.herokuapp.com/"
                body="Online multiplayer game built with WebSockets and Canvas"
                footer="NodeJS, ExpressJS, HTML5, SocketIo"
                thumbnail="./assets/projects/cube.png"
            />
            <Card 
                title="TODO LIST"
                to="https://reacttodoraymag.netlify.com/"
                body="Todo list app built with pure ReactJS"
                footer="ReactJS, Javascript"
                thumbnail="./assets/misc/react.png"
            />
            <Card 
                title="Papo reto"
                to="https://papo-io.herokuapp.com/"
                body="Chat Room built with Python and WebSockets"
                footer="Python, Flask, SocketIO, Javascript"
                thumbnail="./assets/projects/sun.png"
            />
            <Card 
                title="GUILA DEFENSE"
                body="Protect Guila's territory by all means"
                footer="Unity2D, C#"
                thumbnail="./assets/projects/heart-card.png"
            />
        </Box>
    )
}