import React from 'react';
import { Tooltip,Row,Col ,OverlayTrigger} from 'react-bootstrap'; 

export default function Pickupsaving(props){
    const {pickingSaving} = props;
    const tooltip =  <Tooltip>
    <p> Picking up your order to save some money</p>
</Tooltip>;
    return (
        <Row>
            <Col md={6}>
                <OverlayTrigger>
                    <div style={styles.pickingSaving}>Pickup Saving</div>
                </OverlayTrigger>
            </Col>
            <Col style={styles.totalSaving}>${pickingSaving}</Col>
        </Row>


    )
}

const styles = {
    totalSaving:{
        fontWeight:"800",
        color:"red"
    }
}