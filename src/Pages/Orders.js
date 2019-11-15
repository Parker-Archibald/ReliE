import React, {Component} from 'react';
import {RELIE_API} from '../config/coms';
import SingleOrder from '../Pages/SingleOrder';
import '../Styles/Orders.css';

class Orders extends Component {

    state = {
        searchCriteria: '',
        searchByOpt: '',
        cust_id: '',
        order_id: '',
        orderList: []
    }

    handleChange = ({target}) => {
        if(target.value === 'First name') {
            this.setState({[target.name]: 'fname'})
        }
        else if (target.value === 'Last name') {
            this.setState({[target.name]: 'lname'})
        }
        else {
            this.setState({[target.name]: target.value})
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        if(this.state.orderList !== '') {
            this.setState({orderList: ''})
        }

        //fetch cust_id

        fetch(`${RELIE_API}/customer/${this.state.searchByOpt}/${this.state.searchCriteria}`)
        .then(results => results.json())
        .then(data => data.map(data => <SingleOrder orderData={data} callback={this.testOrder}/>))
        .then(data => {
            if(data == [] || data == '') {
                this.setState({orderList: 'No Orders Found'})
            }
            else {
                this.setState({orderList: data})
            }
        })
    }

    componentDidMount = () => {
        document.getElementById('menuCheckbox').click();
    }

    render() {
        return(
            <div id='ordersBack'>
                <div id='ordersBox'>
                    <div id='ordersTitle'>Orders</div>
                    <div id='underline'/>
                    <form onSubmit={this.handleClick} id='orderSearchForm'>
                        <select required id='searchByOpt' name='searchByOpt' onChange={this.handleChange}>
                            <option default hidden value="">Select one</option>
                            <option>First name</option>
                            <option>Last name</option>
                        </select>
                        <input required type='text' id='ordersSearchBar' name='searchCriteria' onChange={this.handleChange} placeholder='Search for Order'/>
                        <button id='orderSearchBtn'><i class="material-icons" id='searchIcon'>search</i></button>
                    </form>
                    <div id='underline'/>
                    <div id='searchedOrders'>{this.state.orderList}</div>
                </div>
                {/* <div id='newOrdersBox'>
                    <div id='newOrderTitle'>Add a New Order</div>
                    <div id='underline'/>
                    <button>New Order</button>
                </div> */}
                <div id='newOrderBtnDiv'><button id='newOrderBtn'>New Order</button></div>
            </div>
        )
    }
}
export default Orders;