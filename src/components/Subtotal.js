import React from 'react';
import {Col,Row} from 'react-bootstrap'
export default class Subtotal extends React.Component{
    render(){
        const {price} = this.props;
        return(
            <React.Fragment>
                <Row>
                    <Col md={6}>Sub total</Col>
                    <Col md={6} >${price}</Col>
                </Row>
                
            </React.Fragment>
               
        )
    }

}