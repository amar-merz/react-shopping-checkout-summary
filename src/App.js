import React from "react";
import "./App.css";
import SubTotal from "./components/SubTotal";
import { Container, Row } from "react-bootstrap";
import PickupSaving from "./components/PickupSaving";
import EstimatedTaxes from "./components/EstimatedTaxes";
import EstimatedTotal from "./components/EstimatedTotal";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 100,
      pickingSaving: -3.25,
      taxes: 10,
      total: 0
    };
  }

  // Calculation of est.taxes and the total price
  getTotalPrice = () => {
    const { price, pickingSaving, taxes } = this.state;
    let est_taxes = ((price + pickingSaving) * taxes) / 100;
    let total = price + pickingSaving + est_taxes;
    this.setState({
      taxes: est_taxes,
      total: total
    });
  };

  componentDidMount = () => {
    this.getTotalPrice();
  };

  render() {
    const { price, pickingSaving, taxes, total } = this.state;
    console.log(total);
    return (
      <Container className="purchase-card mx-auto">
        <SubTotal price={price.toFixed(2)} />
        <PickupSaving pickingSaving={pickingSaving.toFixed(2)} />
        <EstimatedTaxes taxes={taxes.toFixed(2)} />
        <hr />
        <EstimatedTotal total={total.toFixed(2)} />
        <hr />
        <ItemDetails total={total.toFixed(2)} />
        <hr />
        <PromoCode />
      </Container>
    );
  }
}

export default App;
