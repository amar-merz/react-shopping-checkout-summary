import React from "react";
import { Accordion, Form, AccordionToggle, Button, AccordionCollapse } from "react-bootstrap";

export default class PromoCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      text: "Enter Code Promo +"
    };
  }
  showHidePromoCode = () => {
    let { open } = this.state;
    switch (open) {
      case true:
        this.setState({
          open: false,
          text: "Hide Promo Code -"
        });
        break;

      default:
        this.setState({
          open: true,
          text: "Enter Code Promo +"
        });
        break;
    }
  };
  render() {
    const { open, text } = this.state;
    return (
      <Accordion defaultActiveKey={open}>
        <AccordionToggle as={Button} onClick={this.showHidePromoCode} variant="link" eventKey="0">
          {text}
        </AccordionToggle>
        <AccordionCollapse eventKey="0">
          <div>
            <Form>
              <Form.Group controlId="formPromoCode">
                <Form.Label>Promo code</Form.Label>
                <Form.Control type="email" placeholder="Enter Promo Code" />
              </Form.Group>
              <Button style={styles.button} variant="success" block type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </AccordionCollapse>
      </Accordion>
    );
  }
}

const styles = {
  button: {
    borderRadius: "1.6em"
  }
};
