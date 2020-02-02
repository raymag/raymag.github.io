import React from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';

import './styles.css';
import CardData from '../../data/CardData';

export default function Skills(){
    return (
        <Box title="Skills">
            {
                CardData.map((card, index) => 
                        (card['category'] === 'skill'?
                            <Card 
                                key={index}
                                title={card["title"]}
                                thumbnail={card["thumbnail"]}
                                simple
                            /> : ''
                        )        
                    )
            }
        </Box>
    )
}