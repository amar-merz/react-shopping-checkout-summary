import React from 'react';
import {Col,Row} from 'react-bootstrap'
export default class Subtotal extends React.Component{
    render(){
        const {price} = this.props;
        return(
            <React.Fragment>
                <Row className="details-row">
                    <Col md={6}>Sub total</Col>
                    <Col md={6} style={{ textAlign:"right"}} >${price}</Col>
                </Row>
                
            </React.Fragment>
               
        )
    }

}