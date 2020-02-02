import React from 'react';
import './styles.css';
import CardData from '../../data/CardData';

import Box from '../../components/Box';
import Card from '../../components/Card';


export default function Home(){
    return (
        <Box title="Projects">
            {
                CardData.map((card, index) => 
                        (card['category'] === 'main'?
                            <Card 
                                key={index}
                                title={card["title"]}
                                body={card['body']}
                                to={card["to"]}
                                footer={card["footer"]}
                                thumbnail={card["thumbnail"]}
                            /> : ''
                        )        
                    )
            }
        </Box>
    )
}