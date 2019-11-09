import React from 'react';
import {Route} from 'react-router-dom';
import Calculator from '../Pages/Calculator';
import Profile from '../Pages/Profile';
import Orders from '../Pages/Orders';
import Quotes from '../Pages/Quotes';
import Paperwork from '../Pages/Paperwork';
import Dashboard from '../Pages/Dashboard';
import NewQuote from '../Pages/NewQuote';
import NewQuote1 from '../Pages/NewQuote1';

const Routes = ({ID}) => {
    return (
        <>
            <Route exact path='/' component={() => <Dashboard/>}/>
            <Route path='/calculator' component={() => <Calculator/>}/>
            <Route path='/profile' component={() => <Profile ID={ID}/>}/>
            <Route path='/orders' component={() => <Orders/>} />
            <Route path='/quotes' component={() => <Quotes/>} />
            <Route path='/paperwork' component={() => <Paperwork/>} />
            <Route path='/newquote' component={() => <NewQuote/>}/>
            <Route path='/newquote1' component={() => <NewQuote1/>}/>
        </>
    )
}
export default Routes;