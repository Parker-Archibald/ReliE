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
import SingleOrderInfo from '../Pages/SingleOrderInfo';
import NewNav from '../config/NewNav';
import I99 from '../Pages/I99';
import DirectDeposit from '../Pages/DirectDeposit';
import WNine from '../Pages/WNine';
import Training from '../Pages/Training';

const Routes = ({ID}) => {
    return (
        <>
            <Route exact path='/' render={(props) => <Dashboard {...props}/>}/>
            <Route path='/calculator' component={() => <Calculator/>}/>
            <Route path='/profile' render={(props) => <Profile {...props} ID={ID}/>}/>
            <Route path='/orders' component={() => <Orders/>} />
            <Route path='/quotes' component={() => <Quotes/>} />
            <Route path='/paperwork' component={() => <Paperwork/>}/>
            <Route path='/newquote' component={() => <NewQuote/>}/>
            <Route path='/newquote1' component={() => <NewQuote1/>}/>
            <Route path='/singleOrderInfo/:firstName/:lastName' render={(props) => <SingleOrderInfo {...props}/>}/>
            <Route path='/newNav' component={() => <NewNav/>}/>
            <Route path='/1099' component={() => <I99/>}/>
            <Route path='/directDeposit' component={() => <DirectDeposit/>}/>
            <Route path='/W9' component={() => <WNine/>}/>
            <Route path='/training' component={() => <Training/>}/>
        </>
    )
}
export default Routes;