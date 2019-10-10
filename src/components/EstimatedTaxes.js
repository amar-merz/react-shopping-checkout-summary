import React from 'react'
import {Row,Col} from 'react-bootstrap'

export default function Estimatedtaxes(props) {
    const {taxes}=props;
    return (
        <React.Fragment>
            <Row className="details-row" >
                <Col md={6}>Est. Taxes & fees</Col>
                <Col md={6} style={{textAlign:"right"}}>{taxes}</Col>
            </Row>
        </React.Fragment>
    )
}
