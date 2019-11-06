import React, {Component} from 'react';
import '../Styles/Quotes.css';

class Quotes extends Component {
    render() {
        return(
            <div id='quotesBack'>
                <div id='quoteBox'>
                    <div id='quoteTitle'>Quotes</div>
                    <button id='newQuote'>Add New</button>
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