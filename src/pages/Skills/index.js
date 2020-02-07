import React from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';

import './styles.css';
import SkillsData from '../../data/SkillsData';

export default function Skills(){
    return (
        <Box title="Skills">
            {
                SkillsData.map((skill, index) => 
                        (skill['category'] === 'skill'?
                            <Card 
                                key={index}
                                title={skill["title"]}
                                thumbnail={skill["thumbnail"]}
                                simple
                            /> : ''
                        )        
                    )
            }
        </Box>
    )
}