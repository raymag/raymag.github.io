import React from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';

import './styles.css';

export default function Skills(){
    return (
        <Box title="Skills">
            <Card
                title="Python"
                thumbnail="./assets/skills/python.png"
                simple
            />
            <Card 
                title="PHP"
                simple
                thumbnail="./assets/skills/php.png"
            />
            <Card 
                title="NodeJS"
                simple
                thumbnail="./assets/skills/nodejs.png"
            />
            <Card 
                title="ReactJS"
                simple
                thumbnail="./assets/misc/react.png"
            />
            <Card 
                title="MongoDB"
                simple
                thumbnail="./assets/skills/mongodb.png"
            />
            <Card 
                title="MySQL"
                simple
                thumbnail="./assets/skills/mysql.png"
            />
            <Card 
                title="Javascript"
                simple
                thumbnail="./assets/skills/javascript.png"
            />
            <Card 
                title="HTML & CSS"
                simple
                thumbnail="./assets/skills/html-css.png"
            />
            <Card 
                title="Unity"
                simple
                thumbnail="./assets/skills/unity.png"
            />
        </Box>
    )
}