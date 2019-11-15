import React, {Component} from  'react';
import '../Styles/SingleOrderInfo.css';

class SingleOrderInfo extends Component {

    constructor(props) {
        super(props);
        this.data = this.props.location.state;
    }

    state = {
        // cust_id: this.data.cust_id,
        // order_date: this.data.order_date,
        // orderData: this.data.order_id,
        // quote_id: this.data.quote_id,
        // admin_fee_product_id: this.data.admin_fee_product_id,
        // total_amount: this.data.total_amount,
        // discount_amount: this.data.discount_amount,
        // rebate_amount: this.data.rebate_amount,
        // payment_method: this.data.payment_method,
        // check_number: this.data.check_number,
        // bank_id: this.data.bank_id,
        // cc_id: this.data.cc_id,
        // wave_cc: this.data.wave_cc,
        // created_by: this.data.created_by,
        // modified_date: this.data.modified_date
    }

    componentDidMount = () => {
        this.setState({
            cust_id: this.data.cust_id,
        })
    }

    render() {
        return(
            <div id='orderInfoBack'>
                yo
                {console.log(this.data.cust_id)}
            </div>
        )
    }
}
export default SingleOrderInfo;