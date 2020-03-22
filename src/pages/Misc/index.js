import React, {useState, useEffect} from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';
import PageController from '../../components/PageController';
import SearchBar from '../../components/SearchBar';

import './styles.css';
import CardData from '../../data/CardData';

export default function Misc(){
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesNumber, setPagesNumber] = useState(1);
    const [foundProjects, setFoundProjects] = useState(CardData);
    useEffect(()=>{
        let pages = Math.ceil(foundProjects.length/itemsPerPage);
        if(pages === 0){
            setPagesNumber(1);
        }else{
            setPagesNumber(pages);
        }
        setCurrentPage(1);
    }, [foundProjects]);

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

    function search(e){
        const projects  = [];
        CardData.map((card, index) => {
            let search = e.target.value;
            let searchRegex = new RegExp(search, 'ig');
            if(searchRegex.test(card["title"])){
                projects.push(card);
            }
            return null;
        });
        setFoundProjects(projects);
    }

    return (
        <>
        <Box title="All Projects">
            <SearchBar
                placeholder="Search Projects"
                search={search}
            />
            <PageController 
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage={currentPage}
                pagesNumber={pagesNumber}
            />
            {
                foundProjects.map((card, index) => (
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