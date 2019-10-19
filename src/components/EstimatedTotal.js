import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Estimatedtotal(props) {
  const { totalEstimated } = props;
  return (
    <React.Fragment>
      <Row className="details-row">
        <Col md={6} style={styles.estTotal}>
          Est. Total
        </Col>
        <Col md={6} style={{ ...styles.estTotal, textAlign: "right" }}>
          {totalEstimated}
        </Col>
      </Row>
    </React.Fragment>
  );
}

const styles = {
  estTotal: {
    fontWeight: "bold"
  }
};
