import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Quotes.css';

class Quotes extends Component {
    render() {
        return(
            <div id='quotesBack'>
                <div id='quoteBox'>
                    <div id='quoteTitle'>Quotes</div>
                    <Link to='/newquote'><button id='newQuote'>Add New</button></Link>
                </div>
                <div id='allQuotes'>
                    <div id='allQuotesTitle'>All Quotes</div>
                    <div id='underline'/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}
export default Quotes;