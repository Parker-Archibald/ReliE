import React from 'react';
import {Route} from 'react-router-dom';
import Calculator from '../Pages/Calculator';
import Profile from '../Pages/Profile';
import Orders from '../Pages/Orders';
import Quotes from '../Pages/Quotes';
import Paperwork from '../Pages/Paperwork';
import Dashboard from '../Pages/Dashboard';

const Routes = () => {
    return (
        <>
            <Route path='/calculator' component={() => <Calculator/>}/>
            <Route path='/profile' component={() => <Profile/>}/>
            <Route path='/orders' component={() => <Orders/>} />
            <Route path='/quotes' component={() => <Quotes/>} />
            <Route path='/paperwork' component={() => <Paperwork/>} />
            <Route exact path='/dashboard' component={() => <Dashboard/>}/>
        </>
    )
}
export default Routes;