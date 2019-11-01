import React from 'react';
import {Route} from 'react-router-dom';
import Calculator from '../Pages/Calculator';

const Routes = () => {
    return (
        <>
            <Route path='/calculator' component={() => <Calculator/>}/>
        </>
    )
}
export default Routes;