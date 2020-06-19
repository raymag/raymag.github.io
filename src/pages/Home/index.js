import React from 'react';
import './styles.css';

import CardData from '../../data/CardData';
import BlogPosts from '../../data/BlogPosts';

import Box from '../../components/Box';
import Card from '../../components/Card';
import Postit from '../../components/Postit';


export default function Home(){
    return (
        <>
        <img src="./assets/typing.png" className="typing"/>
        <Box title="Main Projects">
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
        <Box title="Slideshows"
             bgColor="#2f2f2f"
             color="#e5e5e5"
        >
            {
                CardData.map((card, index) => 
                    (
                        card['type'] === 'slideshow'?
                            <Card
                                key={index}
                                title={card['title']}
                                to={card['to']}
                                thumbnail={card['thumbnail']}
                                footer={card['footer']}
                                clean
                                dark
                            /> : ''
                    )
                )
            }
        </Box>
        <Box title="Blog Posts">
            {
                BlogPosts.map((postit, index) => (
                    <Postit
                        key={index}
                        title={postit['title']}
                        footer={postit['footer']}
                        to={postit['to']}
                    />
                ))
            }
        </Box>
        </>
    )
}