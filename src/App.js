import React from 'react';
import './App.css';
import Subtotal from './components/Subtotal'
import {Container,Row} from 'react-bootstrap'
import Pickupsaving from './components/Pickupsaving';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price:100,
      pickingSaving:3.25
    }
  }
  render(){
    const {price,pickingSaving} = this.state
  return (
    <Container className="purchase-card mx-auto">
        <Subtotal price={price}/>
        <Pickupsaving pickingSaving={pickingSaving}/>
    </Container>
     
  );
  }

}

export default App;
