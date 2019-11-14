import React, {Component} from 'react';
import {RELIE_API} from '../config/coms';
import '../Styles/Orders.css';

class SingleOrder extends Component {

    state = {
        cust_id: this.props.orderData.id,
        fname: this.props.orderData.fname,
        lname: this.props.orderData.lname,
    }

    componentDidMount = () => {
        fetch(`${RELIE_API}/order/${this.state.cust_id}`)
        .then(results => results.json())
        .then(data => {
            if(data == 'none') {

            }
            else {
                this.setState({
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
                    order_date: data.order_date,
                    created_by: data.created_by,
                    modified_date: data.modified_date
                })
            }
        })

        const firstName = this.state.fname.charAt(0).toUpperCase() + this.state.fname.slice(1);
        const lastName = this.state.lname.charAt(0).toUpperCase() + this.state.lname.slice(1);
        this.setState({firstName: firstName, lastName: lastName});
    }

    render() {
        return(
            <button id='singleOrderBox'>
                <div>
                    {this.state.firstName} {this.state.lastName}
                    <div>{this.state.total_amount}</div>
                </div>
            </button>
        )
    }
}

export default SingleOrder;