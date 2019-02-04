import React, { Component } from 'react';
import './App.css';
import SubTotal from './components/subtotal/Subtotal';
import PickupSaving from './components/pickupsavings/PickupSaving';
import TaxFee from './components/taxesFee/TaxFee';
import EstimatedTotal from './components/estimatedtotal/EstimatedTotal';
import ItemDetails from './components/itemdetails/ItemDetails';
import PromoCode from './components/promocode/PromoCode';
import { connect } from 'react-redux';
import { handleChange } from './components/actions/promoCodeAction';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disabledPromoButton: false
    };
  }

  
	componentDidMount = () => {
		this.setState({
			taxes: (this.state.total + this.state.pickupSavings) * 0.0875
    },
    function() {
      this.setState({
        estimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxes
      });
    });
  }
  
  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
      function() {
        this.setState({
          disabledPromoButton: true
        })
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSaving price={this.state.pickupSavings}/>
          <TaxFee taxes={this.state.taxes.toFixed(2)}/>
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr/>
          <PromoCode 
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disabledPromoButton}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange })(App);
