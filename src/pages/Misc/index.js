import React from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';

import './styles.css';

export default function Misc(){
    return (
        <Box title="All">
            <Card 
                title="MCLOCK"
                to="https://mclock.netlify.com/"
                footer="Javascript, CSS, HTML"
                thumbnail="./assets/misc/hourglass.png"
                clean
            />
            <Card 
                title="PICS2MOVIE"
                to="https://github.com/raymag/mmk"
                footer="Python, FFMPEG"
                thumbnail="./assets/misc/video-file.png"
                clean
            />
            <Card 
                title="TEMPLATE SOCKETIO"
                to="https://github.com/raymag/socketio_template"
                footer="SocketIO and NodeJS Template"
                thumbnail="./assets/misc/socketio.png"
                clean
            />
            <Card 
                title="TEMPLATE NODEJS"
                to="https://github.com/raymag/node_template"
                footer="NodeJS Template"
                thumbnail="./assets/skills/nodejs.png"
                clean
            />
            <Card 
                title="IMDB Scrapper"
                to="https://github.com/raymag/IMDB-Scrapper"
                footer="Web Scrapper"
                thumbnail="./assets/misc/imdb.png"
                clean
            />
            <Card 
                title="HACKTOBERFEST JANAÚBA"
                to="https://hacktoberfestjn.netlify.com/"
                footer="Javascript, CSS, HTML"
                thumbnail="./assets/misc/astronaut.png"
                clean
            />
            <Card 
                title="TIRAPELADA"
                to="https://github.com/raymag/tirapelada"
                footer="PHP, Javascript"
                thumbnail="./assets/projects/football.png"
                clean
            />
            <Card 
                title="BOND"
                to="https://bond-tk.000webhostapp.com/"
                footer="PHP, MySQL, Bootstrap, Javascript"
                thumbnail="./assets/projects/molecule.png"
                clean
            />

            <Card 
                title="PAD"
                to="https://pad-io.herokuapp.com/"
                footer="PHP, Python, MongoDB, Javascript"
                thumbnail="./assets/projects/star.png"
                clean
            />
            <Card 
                title="BUTECO"
                to="https://buteco-io.herokuapp.com/"
                footer="NodeJS, ExpressJS, SocketIO"
                thumbnail="./assets/icons/mango/icon-512x512.png"
                clean
            />
            <Card 
                title="DOTLAND"
                to="https://dotland.herokuapp.com/"
                footer="NodeJS, ExpressJS, HTML5, SocketIo"
                thumbnail="./assets/projects/cube.png"
                clean
            />
            <Card 
                title="TODO LIST"
                to="https://reacttodoraymag.netlify.com/"
                footer="ReactJS, Javascript"
                thumbnail="./assets/misc/react.png"
                clean
            />
            <Card 
                title="Papo reto"
                to="https://papo-io.herokuapp.com/"
                footer="Python, Flask, SocketIO, Javascript"
                thumbnail="./assets/projects/sun.png"
                clean
            />
            <Card 
                title="GUILA DEFENSE"
                footer="Unity2D, C#"
                thumbnail="./assets/projects/heart-card.png"
                clean
            />

            <Card 
                title="CONTRIBUIÇÃO OPEN-SOURCE?"
                to="https://raymag.github.io/show/contribuicao_opensource/"
                footer="Slideshow"
                thumbnail="./assets/misc/git.png"
                clean
            />
            <Card 
                title="A EVOLUÇÃO DOS GAMES"
                to="https://raymag.github.io/show/evolucao_jogos/"
                footer="Slideshow"
                thumbnail="./assets/misc/joystick.png"
                clean
            />
        </Box>
    )
}