import React from 'react';
import Box from '../../components/Box';
import Slideshow from '../../components/Slideshow';

import './styles.css';

export default function About(){
    return (
        <>
        <Box color="#e5e5e5" bgColor="#421567" title="Carlos Magno" column >
            <div className="bio-container">
                <img src="./assets/dev.jpg" alt="dev" id="dev-pic" title="Magno"/>
                <div className="bio-text">
                    <p id="bio">
                    Introvert, Geek, Web Developer, Horde Player and CS Student...<br/>
                    Also known as <span className="italic">Raymag</span>, his hobbies are watching animations, learning new stuff, reading useful books and running. 
			He also likes to draw stuff on Adobe Illustrator, but it's pretty bad at it.
                    </p><br/>
                    <p>prayk11@gmail.com</p>
                    <p>prayk11@outlook.com</p>
                </div>
            </div>
        </Box>
        <Box title="Gallery">
            <Slideshow
                interval={3000}
                images={[
                    './assets/slideshow/img_1.png',
                    './assets/slideshow/img_2.png',
                    './assets/slideshow/img_3.jpg',
                    './assets/slideshow/img_4.jpg',
                    './assets/slideshow/img_5.jpg',
                    './assets/slideshow/img_6.jpg',
                    './assets/slideshow/img_7.jpg',
                    './assets/slideshow/img_8.jpg',
                    './assets/slideshow/img_9.jpg',
                    './assets/slideshow/img_10.jpg',
                    './assets/slideshow/img_11.jpg',
                    './assets/slideshow/img_12.jpg',
                    './assets/slideshow/img_13.jpg',
                    './assets/slideshow/img_14.png',
                    './assets/slideshow/img_15.png',
                    './assets/slideshow/img_16.jpg',
                    './assets/slideshow/img_17.jpg',
                ]}
            />
        </Box>
        </>
    )
}
