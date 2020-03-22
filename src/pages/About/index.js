import React from 'react';
import Box from '../../components/Box';

import './styles.css';

export default function About(){
    return (
        <Box color="#e5e5e5" bgColor="#421567" title="Carlos Magno" column >
            <div className="bio-container">
                <img src="./assets/dev.jpg" alt="dev" id="dev-pic" title="Magno"/>
                <div className="bio-text">
                    <p id="bio">
                    Introvert, Geek, Web Developer, Horde Player and CS Student...<br/>
                    Also known as <span className="italic">Raymag</span>, his hobbies are watching animations, learning new stuff, reading useful books and running.
                    </p><br/>
                    <p>prayk11@gmail.com</p>
                    <p>prayk11@outlook.com</p>
                </div>
            </div>
        </Box>
    )
}