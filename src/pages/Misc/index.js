import React, {useState, useEffect} from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';
import PageController from '../../components/PageController';

import './styles.css';
import CardData from '../../data/CardData';

export default function Misc(){
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesNumber, setPagesNumber] = useState(1);
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        let projects = [];
        for(let i=0;i<CardData.length;i++){
            if(CardData[i]['category'] !== 'skill'){
                projects.push(CardData[i]);
            }
        }
        setProjects(projects);
        setPagesNumber(Math.ceil(projects.length/itemsPerPage));
    }, []);

    function nextPage(){
        if(currentPage<pagesNumber){
            setCurrentPage(currentPage+1);
        }
    }

    function previousPage(){
        if(currentPage>1){
            setCurrentPage(currentPage-1);
        }
    }

    return (
        <>
        <Box title="All Projects" id="projects-box">
            <PageController 
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage={currentPage}
                pagesNumber={pagesNumber}
            />
            {
                projects.map((card, index) => (
                    index >= ((currentPage*itemsPerPage) - itemsPerPage) && index < (currentPage * itemsPerPage)?
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
            <PageController 
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage={currentPage}
                pagesNumber={pagesNumber}
            />
        </Box>
        </>
    )
}