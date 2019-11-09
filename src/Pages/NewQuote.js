import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/NewQuote.css';

let randomID = 0;
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear() - 2000;
today = `${dd}/${mm}/${yyyy}`;

class NewQuote extends Component {

    handleClickFan = () => {
        if(document.getElementById('SolarFan1').className === 'SolarFan1') {
            document.getElementById('SolarFan1').className = 'SolarFan1A';
            document.getElementById('SolarFan2').className = 'SolarFan2A';
        }
        else {
            document.getElementById('SolarFan1').className = 'SolarFan1';
            document.getElementById('SolarFan2').className = 'SolarFan2';
        }
    }

    handleClickVent = () => {
        if(document.getElementById('newAdminFee1').className === 'newAdminFee1') {
            document.getElementById('newAdminFee1').className = 'newAdminFee1A';
            document.getElementById('newAdminFee2').className = 'newAdminFee1A';
        }
        else {
            document.getElementById('newAdminFee1').className = 'newAdminFee1';
            document.getElementById('newAdminFee2').className = 'newAdminFee2';
        }
    }

    handleClickBaffle = () => {
        if(document.getElementById('baffles1').className === 'baffles1') {
            document.getElementById('baffles1').className = 'baffles1A';
            document.getElementById('baffles2').className = 'baffles1A';
        }
        else {
            document.getElementById('baffles1').className = 'baffles1';
            document.getElementById('baffles2').className = 'baffles2';
        }
    }

    handleClickGas = () => {
        if(document.getElementById('gas1').className === 'gas1') {
            document.getElementById('gas1').className = 'gas1A';
            document.getElementById('gas2').className = 'gas1A';
        }
        else {
            document.getElementById('gas1').className = 'gas1';
            document.getElementById('gas2').className = 'gas2';
        }
    }

    handleClickCO = () => {
        if(document.getElementById('CO1').className === 'CO1') {
            document.getElementById('CO1').className = 'CO1A';
            document.getElementById('CO2').className = 'CO1A';
        }
        else {
            document.getElementById('CO1').className = 'CO1';
            document.getElementById('CO2').className = 'CO2';
        }
    }

    handleClickAudit = () => {
        if(document.getElementById('energyAudit1').className === 'energyAudit1') {
            document.getElementById('energyAudit1').className = 'energyAudit1A';
            document.getElementById('energyAudit2').className = 'energyAudit1A';
        }
        else {
            document.getElementById('energyAudit1').className = 'energyAudit1';
            document.getElementById('energyAudit2').className = 'energyAudit2';
        }
    }

    handleClickAirSeal = () => {
        if(document.getElementById('airSeal1').className === 'airSeal1') {
            document.getElementById('airSeal1').className = 'airSeal1A';
            document.getElementById('airSeal2').className = 'airSeal1A';
        }
        else {
            document.getElementById('airSeal1').className = 'airSeal1';
            document.getElementById('airSeal2').className = 'airSeal2';
        }
    }
    handlelightCovers = () => {
        if(document.getElementById('lightCovers1').className === 'lightCovers1') {
            document.getElementById('lightCovers1').className = 'lightCovers1A';
            document.getElementById('lightCovers2').className = 'lightCovers1A';
        }
        else {
            document.getElementById('lightCovers1').className = 'lightCovers1';
            document.getElementById('lightCovers2').className = 'lightCovers2';
        }
    }
    handlelightCovers

    render() {
        return(
            <div id='newQuoteBack'>
                <div id='newQuoteBox'>
                    <div id='newQuoteTitle'>New Quote</div>
                    <div id='newQuoteLine'/>
                    <div id='topRow'>
                        <div id='newQuoteId'>Quote ID: {randomID + 1}</div>
                        <div id='newQuoteDate'>Date: {today}</div>
                    </div>
                    <div id='newSquareFoot'>Square Foot:</div>
                    <div id='newPreRVal'>Pre R Value:</div>
                    <div id='newYear'>Year:</div>
                    <input id='newSquareFootIn'/>
                    <input id='newPreRValIn'/>
                    <input id='newYearIn'/>
                    <div id='newAdminFee'>Admin Fee Product Id</div>
                    <select id='newAdminFeeDropdown'>
                        <option default hidden>Select One</option>
                        <option>Admin Fee - 0</option>
                        <option>Admin Fee - 50</option>
                        <option>Admin Fee - 100</option>
                        <option>Admin Fee - 200</option>
                        <option>Admin Fee - 300</option>
                    </select>
                    <div id='newQuote1'>Quotes 1</div>
                    <div id='newQuote2'>Quotes 2</div>
                    <select id='newQuote1Dropdown'>
                        <option default hidden>Select One</option>
                        <option>R10</option>
                        <option>R20</option>
                        <option>R30</option>
                        <option>R40</option>
                        <option>R50</option>
                        <option>R60</option>
                    </select>
                    <select id='newQuote2Dropdown'>
                        <option default hidden>Select One</option>
                        <option>R10</option>
                        <option>R20</option>
                        <option>R30</option>
                        <option>R40</option>
                        <option>R50</option>
                        <option>R60</option>
                    </select>
                    <br/>

                    {/* quote options */}

                    <div id='newQuoteLine'/>
                    <div id='margin'>
                        <label id='checkboxContainer'>Solar Fan
                            <input type='checkbox' onClick={this.handleClickFan}/>
                            <span id='checkmark'></span>
                        </label>
                        <input type='text' placeholder='1' id='SolarFan1' className='SolarFan1'/>
                        <input type='text' placeholder='1' id='SolarFan2' className='SolarFan2'/>

                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Exhaust Fan Ventilation
                            <input type='checkbox' onClick={this.handleClickVent}/>
                            <span id='checkmark'></span>
                        </label>
                        <input type='text' placeholder='1' id='newAdminFee1' className='newAdminFee1'/>
                        <input type='text' placeholder='1' id='newAdminFee2' className='newAdminFee2'/>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Baffles
                            <input type='checkbox' onClick={this.handleClickBaffle}/>
                            <span id='checkmark'></span>
                        </label>
                        <input type='text' placeholder='1' id='baffles1' className='baffles1'/>
                        <input type='text' placeholder='1' id='baffles2' className='baffles2'/>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Combustion Gas Testing
                            <input type='checkbox' onClick={this.handleClickGas}/>
                            <span id='checkmark'></span>
                        </label>
                        <input type='text' placeholder='1' id='gas1' className='gas1'/>
                        <input type='text' placeholder='1' id='gas2' className='gas2'/>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>CO Detector
                            <input type='checkbox' onClick={this.handleClickCO}/>
                            <span id='checkmark'></span>
                        </label>
                        <input type='text' placeholder='1' id='CO1' className='CO1'/>
                        <input type='text' placeholder='1' id='CO2' className='CO2'/>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Energy Audit
                            <input type='checkbox' onClick={this.handleClickAudit}/>
                            <span id='checkmark'></span>
                        </label>
                        <input type='text' placeholder='1' id='energyAudit1' className='energyAudit1'/>
                        <input type='text' placeholder='1' id='energyAudit2' className='energyAudit2'/>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Air Seal
                            <input type='checkbox' onClick={this.handleClickAirSeal}/>
                            <span id='checkmark'></span>
                        </label>
                        <input type='text' placeholder='1' id='airSeal1' className='airSeal1'/>
                        <input type='text' placeholder='1' id='airSeal2' className='airSeal2'/>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Recess Light Covers
                            <input type='checkbox' onClick={this.handlelightCovers}/>
                            <span id='checkmark'></span>
                        </label>
                        <input type='text' placeholder='1' id='lightCovers1' className='lightCovers1'/>
                        <input type='text' placeholder='1' id='lightCovers2' className='lightCovers2'/>
                    </div>
                    <br/>
                    <div id='submitButtons'>
                        <button type='submit' id='previousBtn'>Previous</button>
                        <Link to='/newquote1'><button type='submit' id='nextBtn'>Next</button></Link>
                    </div>
                    <br/>

                </div>
            </div>
        )
    }
}
export default NewQuote;