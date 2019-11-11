import React, {Component} from 'react';
import '../Styles/NewQuote1.css';

class NewQuote1 extends Component {
    render() {
        return (
            <div id='newQuoteBack'>
                <div id='newQuoteBox'>
                    <div id='newQuoteTitle'>New Quote</div>
                    <div id='newQuoteLine'/>
                    <div id='originalCost1'>Original Cost 1</div>
                    <input id='originalCost1In' placeholder='$'/>
                    <div id='originalCost2'>Original Cost 2</div>
                    <input id='originalCost1In' placeholder='$'/>
                    <div id='insideBox'>
                        <div id='energyAudit'>Energy Audit 
                        <div id='outerDiv'><input id='newQuote1In' type='text' placeholder='$'/></div>
                        </div>
                        <div id='airSealing'>Air Sealing<div id='outerDiv'><input id='newQuote1In' type='text' placeholder='$'/></div></div>
                        <div id='gasTesting'>Combustion Gas Testing <div id='outerDiv'><input id='newQuote1In' type='text' placeholder='$'/></div></div>
                        <div id='ventilation'>Ventilation <div id='outerDiv'><input id='newQuote1In' type='text' placeholder='$'/></div></div>
                        <div id='rebate'>Rebate <div id='outerDiv'><input id='newQuote1In' type='text' placeholder='$'/></div></div>
                        <div id='costAtInstall'>COST AT INSTALL <div id='outerDiv'><input id='newQuote1In' type='text' placeholder='$'/></div></div>
                        <div id='costAtInstall'>Rebate <div id='outerDiv'><input id='newQuote1In' type='text' placeholder='$'/></div></div>
                        <div id='costAtInstall'>Tax Credit <div id='outerDiv'><input id='newQuote1In' type='text' placeholder='$'/></div></div>
                        <div id='costAtInstall'>TOTAL INVESTMENT <div id='outerDiv'><input id='newQuote1In' type='text' placeholder='$'/></div></div>
                        <div id='costAtInstall'>Quote to Convert <div id='outerDiv'><input id='newQuote1In' type='text' placeholder='$'/></div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewQuote1;