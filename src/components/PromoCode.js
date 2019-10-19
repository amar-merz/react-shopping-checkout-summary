import React from "react";
import { Accordion, Form, AccordionToggle, Button, AccordionCollapse } from "react-bootstrap";
import { connect } from "react-redux";

class PromoCode extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.state = {
      open: false,
      text: "Enter Code Prom +"
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
  handleSubmit = e => {
    e.preventDefault();
    this.props.getTotalAfterPromo(this.textInput.current.value);
  };

  render() {
    const { open, text } = this.state;
    //pass the props "total" to the parent App
    this.props.gettotalPriceAfterPromo(this.props.total);
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
                <Form.Control ref={this.textInput} type="text" placeholder="Enter Promo Code" />
              </Form.Group>
              <Button
                style={styles.button}
                onClick={this.handleSubmit}
                variant="success"
                block
                type="submit"
              >
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
const mapDispatchToProps = dispatch => {
  return {
    //handleChange: e => dispatch({ type: "PROMO_CODE_ONCHANGE", e:e }),
    getTotalAfterPromo: codeVal => dispatch({ type: "PROMO_CODE_ONSUBMIT", payload: codeVal })
  };
};
const mapStateToProps = state => {
  return {
    //codePromo: state.codePromo,
    total: state.total
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoCode);
