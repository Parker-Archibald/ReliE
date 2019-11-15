import React, {Component} from 'react';
import {RELIE_API} from '../config/coms';
import {Link} from 'react-router-dom';
import '../Styles/Orders.css';

class SingleOrder extends Component {

    state = {
        cust_id: this.props.orderData.id,
        fname: this.props.orderData.fname,
        lname: this.props.orderData.lname,
        total_amount: 'NA'
    }

    componentDidMount = () => {
        fetch(`${RELIE_API}/order/${this.state.cust_id}`)
        .then(results => results.json())
        .then(data => {
            if(data.comment === 'No Order') {
                this.setState({comment: 'No Order'})
            }
            else {
                this.setState({
                    order_date: data.order_date,
                    orderData: data.order_id,
                    quote_id: data.quote_id,
                    admin_fee_product_id: data.admin_fee_product_id,
                    total_amount: data.total_amount,
                    discount_amount: data.discount_amount,
                    rebate_amount: data.rebate_amount,
                    payment_method: data.payment_method,
                    check_number: data.check_number,
                    bank_id: data.bank_id,
                    cc_id: data.cc_id,
                    wave_cc: data.wave_cc,
                    created_by: data.created_by,
                    modified_date: data.modified_date
                })
            }
        })
        .then(this.setDate)

        const firstName = this.state.fname.charAt(0).toUpperCase() + this.state.fname.slice(1);
        const lastName = this.state.lname.charAt(0).toUpperCase() + this.state.lname.slice(1);
        this.setState({firstName: firstName, lastName: lastName});
    }

    setDate = () => {
        let date = new Date(this.state.order_date);
        let dd = String(date.getDate());
        let mm = String(date.getMonth() + 1);
        let yyyy = String(date.getFullYear() - 2000);
        date = `${dd}/${mm}/${yyyy}`;
        this.setState({date: date});
        if(this.state.total_amount == undefined) {
            this.setState({total_amount: 'NA'})
        }
    }

    
    render() {
        if(this.state.comment) {
            return null;
        }   
        else {
            return(
                <Link to={{pathname: `/test/singleOrderInfo/${this.state.firstName}/${this.state.lastName}`, state: this.state}}>
                    <button id='singleOrderBox'>
                        <div>
                            <div id='orderOrder_date'>{this.state.date}</div>
                            {this.state.firstName} {this.state.lastName}
                            <div id='orderTotal_amount'>{this.state.total_amount}</div>
                            <span id="arrow_right"/>
                        </div>
                    </button>
                </Link>
            )
        }
    
        
    }
}

export default SingleOrder;