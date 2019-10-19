import React from "react";
import "./App.css";
import SubTotal from "./components/SubTotal";
import { Container, Row } from "react-bootstrap";
import PickupSaving from "./components/PickupSaving";
import EstimatedTaxes from "./components/EstimatedTaxes";
import EstimatedTotal from "./components/EstimatedTotal";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";
import pricingData from "./data/pricingData";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalEstimated: pricingData.data.totalEst
    };
  }
  // Calculation of est.taxes and the total price
  // getTotalPrice = () => {
  //   const { price, taxes, pickupSaving } = pricingData.data;
  //   // const { total } = this.state;
  //   let est_taxes = ((price + pickupSaving) * taxes) / 100;
  //   let total = price + pickupSaving + est_taxes;
  // //   this.setState({
  // //     taxes: est_taxes,
  // //     total: total
  // //   });
  // // };

  gettotalPriceAfterPromo = totalAfterPromo => {
    this.setState({
      totalEstimated: totalAfterPromo
    });
  };

  componentDidMount = () => {
    //this.getTotalPrice();
  };

  render() {
    const { totalEstimated } = this.state;
    const { price, taxes, pickupSaving } = pricingData.data;
    return (
      <Container className="purchase-card mx-auto">
        <SubTotal price={price.toFixed(2)} />
        <PickupSaving pickingSaving={pickupSaving.toFixed(2)} />
        <EstimatedTaxes taxes={taxes.toFixed(2)} />
        <hr />
        <EstimatedTotal totalEstimated={totalEstimated.toFixed(2)} />
        <hr />
        <ItemDetails totalEstimated={totalEstimated.toFixed(2)} />
        <hr />
        <PromoCode gettotalPriceAfterPromo={this.gettotalPriceAfterPromo} />
      </Container>
    );
  }
}

export default App;
