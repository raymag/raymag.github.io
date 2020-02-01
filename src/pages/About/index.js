import React from 'react';
import Box from '../../components/Box';

import './styles.css';

export default function About(){
    return (
        <Box color="#e5e5e5" bgColor="#421567" title="Carlos Magno" column >
            <img src="./assets/dev.jpg" alt="dev" id="dev-pic"/>
            <p id="bio">
            Técnico em Informática, Geek e Curioso por Natureza;<br/>
            System.out.println(<span className="highlight">"H3llo W0rld"</span>);
            </p><br/>
            <p>prayk11@gmail.com</p>
            <p>prayk11@outlook.com</p>
        </Box>
    )
}