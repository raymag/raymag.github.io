import React, {useState, useEffect} from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';
import PageController from '../../components/PageController';

import './styles.css';
import SkillsData from '../../data/SkillsData';

export default function Skills(){
    const itemsPerPage = 8;
    const [pagesNumber, setPagesNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        setPagesNumber(Math.ceil(SkillsData.length/itemsPerPage));
    }, []);

    function previousPage(){
        if(currentPage>1){
            setCurrentPage(currentPage-1);
        }
    }
    function nexPage(){
        if(currentPage<pagesNumber){
            setCurrentPage(currentPage+1);
        }
    }
    return (
        <Box title="Skills">
            <PageController
                previousPage={previousPage}
                nextPage={nexPage}
                currentPage={currentPage}
                pagesNumber={pagesNumber}
            />
            {
                SkillsData.map((skill, index) => 
                        (index >= ((currentPage*itemsPerPage)-itemsPerPage) && index < (currentPage*itemsPerPage)?
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