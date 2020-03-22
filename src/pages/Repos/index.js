import React, {useEffect, useState} from 'react';
import Box from '../../components/Box';
import Postit from '../../components/Postit';
import PageController from '../../components/PageController';
import SearchBar from '../../components/SearchBar';

import './styles.css';

export default function Repos(){
    const itemsPerPage = 15;
    const [repos, setRepos] = useState([]);
    const [query, setQuery] = useState('');
    const [pagesNumber, setPagesNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function getRepos(){
            await fetch("https://api.github.com/users/raymag/repos?sort=updated")
                    .then(res => res.json())
                    .then(data => {
                        setIsLoading(false);                        
                        const foundRepos = [];
                        data.map((repo, index) => {
                            const regex = new RegExp(query, 'ig');
                            if(regex.test(repo["name"])){
                                foundRepos.push(repo);
                            }
                            return null;
                        });
                        const pages = Math.ceil(foundRepos.length/itemsPerPage);
                        setRepos(foundRepos);
                        setCurrentPage(1);
                        if(pages === 0){
                            setPagesNumber(1);
                        }else{
                            setPagesNumber(pages);
                        }
                    });
        }
        getRepos();
    }, [query]);

    function previousPage(){
        if(currentPage>1){
            setCurrentPage(currentPage-1);
        }
    }
    function nextPage(){
        if(currentPage<pagesNumber){
            setCurrentPage(currentPage+1);
        }
    }
    function search(e){
        setQuery(e.target.value);
    }
    return (
        <>
        <Box title="Repositories">
            <SearchBar
                placeholder={"Search Repositories"}
                search={search}
            />
        <PageController
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={currentPage}
            pagesNumber={pagesNumber}
        />
        {isLoading ? <img src="./assets/loading.gif" alt="loading"/>:''}
        {
            repos.map((repo, index) => (
                index >= ((currentPage*itemsPerPage)-itemsPerPage) && index < (currentPage*itemsPerPage)?
                <Postit
                    key={index}
                    title={repo["name"]}
                    footer={repo["description"] !== null? 
                    ( (repo["description"].length > 40 )?
                     repo["description"].substring(0, 35)+'...':
                     repo["description"] ) :
                    'This repository doesn\'t have a description'}
                    to={"https://github.com/"+repo["full_name"]}

                />:''
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