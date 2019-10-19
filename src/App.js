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

  //  function to pass to codePromo Child to get back totalEst after discount
  gettotalPriceAfterPromo = totalAfterPromo => {
    this.setState({
      totalEstimated: totalAfterPromo
    });
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
