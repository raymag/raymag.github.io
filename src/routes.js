import { HashRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Misc from './pages/Misc';
import About from './pages/About';
import e404 from './pages/e404';

import NavBar from './components/NavBar';

export default function Routes(){
    return (
        <>
        <HashRouter>
        <NavBar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/skills' component={Skills} />
                <Route path='/misc' component={Misc} />
                <Route path='/about' component={About} />
                <Route component={e404} />
            </Switch>
        </HashRouter>
        </>
    )
}