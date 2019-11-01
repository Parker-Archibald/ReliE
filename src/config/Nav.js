import React, {Component} from 'react';
import '../Styles/Nav.css';

let open = false;

class Nav extends Component {

    myFunction = () => {
        if(document.getElementById('bar1').className === 'bar1' || document.getElementById('bar1').className === 'newBar1') {
            document.getElementById('bar1').className = 'change1';
            document.getElementById('bar2').className = 'change2';
            document.getElementById('bar3').className = 'change3';
            document.getElementById('leftNav').className = 'leftNavShowing';
        }
        else {
            document.getElementById('bar1').className = 'newBar1';
            document.getElementById('bar2').className = 'newBar2';
            document.getElementById('bar3').className = 'newBar3';
            document.getElementById('leftNav').className = 'leftNavClose';
        }
    }

    render() {
        return(
            <div>
                <h1 id='calculatorTitle'><meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <div class="container" onClick={this.myFunction}>
                    <div id='bar1' className="bar1"></div>
                    <div id='bar2' className="bar2"></div>
                    <div id='bar3' className="bar3"></div>
                </div>
                RELI ENERGY SOLUTIONS
                </h1>
                <div id='leftNav' className='leftNav'>
                    <div>First Name</div>
                    <div>Orders</div>
                    <div>Quotes</div>
                    <div>Paperwork</div>
                    <div>Sign Out</div>
                </div>
                <div id='bottomOfPage'>
                    <div id='siteName'>www.relienergysolutions.com</div>
                </div>
            </div>
        )
    }
}
export default Nav;