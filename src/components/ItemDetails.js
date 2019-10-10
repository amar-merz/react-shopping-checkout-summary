import React, { Component } from "react";
import { Button, Accordion, Card, Media, Row, Col } from "react-bootstrap";

export default class itemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      text: "See item details +"
    };
  }
  showHideDetails = () => {
    let { open } = this.state;
    switch (open) {
      case true:
        this.setState({
          open: false,
          text: "Hide item details -"
        });
        break;

      default:
        this.setState({
          open: true,
          text: "See item details +"
        });
        break;
    }
  };
  render() {
    const { text, open } = this.state;
    const { total } = this.props;
    return (
      <Accordion defaultActiveKey={open}>
        <Accordion.Toggle as={Button} onClick={this.showHideDetails} variant="link" eventKey="0">
          {text}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div
            style={{
              border: "1px solid #f5f3f3"
            }}
          >
            <Media>
              <img
                src="https://i5.wal.co/asr/382249d1-7393-436f-b1cd-a265d7828447_1.6be20b1c09e6c97e17cbfbc121e4f24c.jpeg-2f94606b6edd8423a192db7fd2582f6a12b00b76-legacy-q85.jpg?odnWidth=450&odnHeight=450&odnBg=ffffff"
                alt="item-x"
                width="100"
                height="100"
              />
              <Media.Body>
                <h5>Item title</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                  sollicitudin commodo.
                </p>
                <Row>
                  <Col md={6}>
                    <strong>{total}</strong>
                    <br />
                    <strong>
                      <s>{total}</s>
                    </strong>
                  </Col>
                  <Col md={6}>Qte:1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}
