import React, {Component} from 'react';
import '../Styles/Calculator.css';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear() - 2000;
today = `${dd}/${mm}/${yyyy}`

class Calculator extends Component {
    render() {
        return (
            <div>
                <div id='topInfo'>
                    <div id='squareFoot'>Square footage: </div>
                    <div id='RValue'>Pre R Value: </div>
                    <div id='year'>Year: </div>
                </div>
                <div id='additionalCosts'>
                    <div id='originalCost'>Original Cost</div>
                    <input id='originalCostInput'/> 
                    <input id='originalCostInput1'/>
                    <div id='CAZ'>CAZ Testing</div>
                    <input id='input1'/>
                    <input id='input2'/>
                    <div id='energyAudit'>Energy Audit</div>
                    <input id='input1'/>
                    <input id='input2'/>
                    <div id='airSeal'>Air Seal</div>
                    <input id='input1'/>
                    <input id='input2'/>
                    <div id='ventilation'>Ventilation</div>
                    <input id='input1'/>
                    <input id='input2'/>
                    <div id='rebate'>Rebate</div>
                    <input id='input1'/>
                    <input id='input2'/>
                    <div id='other'>Other</div>
                    <input id='input1'/>
                    <input id='input2'/>
                    <div id='other1'>Other</div>
                    <input id='input1'/>
                    <input id='input2'/>
                </div>
                <div id='atInstall'>
                    <div id='costAtInstall'>Cost At Install</div>
                    <input id='originalCostInput'/> 
                    <input id='originalCostInput1'/>
                    <div id='rebateAtInstall'>Rebate</div>
                    <input id='input1'/>
                    <input id='input2'/>
                    <div id='taxCredit'>Tax Credit</div>
                    <input id='input1'/>
                    <input id='input2'/>
                    <div id='totalInvestment'>Total Investment</div>
                    <input id='originalCostInput'/> 
                    <input id='originalCostInput1'/>
                </div>
                <div id='date'>Date: {today} </div>
                <div id='smallText'>*This quoted cost is subject to change until written on an official invoice. Cost may change based on available funding from any incentive provider.</div>
            </div>
        )
    }
}
export default Calculator;