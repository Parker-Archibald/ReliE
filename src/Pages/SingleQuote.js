import React, {Component} from 'react';
import '../Styles/SingleQuote.css';

class SingleQuote extends Component {

    constructor(props) {
        super(props);
        let data = this.props.info;
        this.state = {
            quote_id: data.quote_id || 'stuff',
            rep_id: data.rep_id,
            quote_name: data.quote_name || 'stuff',
            quote_phone: data.quote_phone,
            quote_date: data.quote_date || 'stuff',
            quote_status: data.quote_status,
            sq_foot: data.sq_foot,
            ins_id1: data.ins_id1,
            ins_id2: data.ins_id2,
            quote_tot1: data.quote_tot1 || 'stuff',
            quote_tot2: data.quote_tot2 || 'stuff',
            org_cost_quote1: data.org_cost_quote1,
            org_cost_quote2: data.org_cost_quote2,
            pre_r_value: data.pre_r_value,
            year: data.year,
            quote_rest_data: data.quote_rest_data,
            adming_fee_product_id: data.adming_fee_product_id,
            quote_to_convert: data.quote_to_convert
        }
    }

    componentDidMount = () => {
        let date = new Date(this.state.quote_date);
        let dd = String(date.getDate());
        let mm = String(date.getMonth());
        let yyyy = String(date.getFullYear() - 2000);
        date = `${dd}/${mm}/${yyyy}`;
        this.setState({date: date});
    }

    render() {
        return(
            <div id='fullQuote'>
                <div id='quoteSides'>{this.state.quote_id}</div>
                <div id='quoteSides'>{this.state.quote_name}</div>
                <div id='quoteSides'>{this.state.date}</div>
                <div id='quoteSides'>{this.state.quote_tot1}</div>
                <div id='quoteSides'>{this.state.quote_tot2}</div>
                {/* <div id='quoteSides'>edit</div> */}
            </div>
        )
    }    
}   
export default SingleQuote;