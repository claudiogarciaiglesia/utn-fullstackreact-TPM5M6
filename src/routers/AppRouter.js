import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { BookList } from '../components/BookList';
import { Categories } from '../components/Categories';
import { Navbar } from '../components/Navbar';
import { People } from '../components/People';

export const AppRouter = () => {
    console.log('drawing approuter');
    return (
        <div>
            <Navbar />
            <Router>
                <Switch>
                    <Route path="/booklist" component={BookList} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/people" component={People} />
                    <Redirect to="/booklist" /> 
                </Switch>
            </Router>
        </div>
    )
}


