import React from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';

import './styles.css';
import CardData from '../../data/CardData';

export default function Misc(){
    return (
        <Box title="All Projects">
            {
                CardData.map((card, index) => (
                    card['category'] !== 'skill' ?
                        <Card 
                            key={index}
                            title={card["title"]}
                            to={card["to"]}
                            footer={card["footer"]}
                            thumbnail={card["thumbnail"]}
                            clean
                        /> : ''
                     ))
            }
        </Box>
    )
}