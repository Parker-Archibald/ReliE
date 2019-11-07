import React, {Component} from 'react';
import '../Styles/NewQuote.css';

let randomID = 0;
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear() - 2000;
today = `${dd}/${mm}/${yyyy}`;

class NewQuote extends Component {

    handleClick = () => {
        document.getElementById('SolarFan1').className = 'SolarFan1A';
        document.getElementById('SolarFan2').className = 'SolarFan2A';
    }

    render() {
        return(
            <div id='newQuoteBack'>
                <div id='newQuoteBox'>
                    <div id='newQuoteTitle'>Create Quote</div>
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
                            <input type='checkbox'/>
                            <span id='checkmark' onClick={this.handleClick}></span>
                        </label>
                        <input type='text' placeholder='1' id='SolarFan1' className='SolarFan1'/>
                        <input type='text' placeholder='1' id='SolarFan2' className='SolarFan2'/>

                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Exhaust Fan Ventilation
                            <input type='checkbox'/>
                            <span id='checkmark'></span>
                        </label>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Baffles
                            <input type='checkbox'/>
                            <span id='checkmark'></span>
                        </label>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Combustion Gas Testing
                            <input type='checkbox'/>
                            <span id='checkmark'></span>
                        </label>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>CO Detector
                            <input type='checkbox'/>
                            <span id='checkmark'></span>
                        </label>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Energy Audit
                            <input type='checkbox'/>
                            <span id='checkmark'></span>
                        </label>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Air Seal
                            <input type='checkbox'/>
                            <span id='checkmark'></span>
                        </label>
                    </div>
                    <div id='margin'>
                        <label id='checkboxContainer'>Recess Light Covers
                            <input type='checkbox'/>
                            <span id='checkmark'></span>
                        </label>
                    </div>
                    <br/>
                    <div id='submitButtons'>
                        <button type='submit' id='previousBtn'>Previous</button>
                        <button type='submit' id='nextBtn'>Next</button>
                    </div>
                    <br/>

                </div>
            </div>
        )
    }
}
export default NewQuote;