import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-credit-cards";
import QRCode from "qrcode.react";
import "react-credit-cards/es/styles-compiled.css";

export default class Confirmation extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
  };

  handleCallback = ({issuer}, isValid) => {
    if (isValid) {
      this.setState({issuer});
    }
  };

  handleInputFocus = ({target}) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({target}) => {
    this.setState({[target.name]: target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const {issuer} = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({formData});
    this.form.reset();
  };

  render() {
    const {name, number, expiry, cvc, focused, issuer} = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <Container>
            <Row className={"w-100 mx-auto"}>
              <Col className={"mx-2"}>
                <h1>Credit card</h1>
                <h4>Please enter you credit card information here</h4>
                <Card
                  number={number}
                  name={name}
                  expiry={expiry}
                  cvc={cvc}
                  focused={focused}
                  callback={this.handleCallback}
                />
                <hr style={{margin: "30px 0 30px"}}/>
                <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="number"
                      className="form-control"
                      placeholder="Card Number"
                      pattern="[\d| ]{16,22}"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                    <small>E.g.: 49..., 51..., 36..., 37...</small>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="tel"
                        name="expiry"
                        className="form-control"
                        placeholder="Valid Thru"
                        pattern="\d\d/\d\d"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="tel"
                        name="cvc"
                        className="form-control"
                        placeholder="CVC"
                        pattern="\d{3,4}"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </div>
                  </div>
                  <input type="hidden" name="issuer" value={issuer}/>
                  <div className="form-actions">
                    <button className="btn btn-primary btn-block">PAY</button>
                  </div>
                </form>
              </Col>
              <Col className={"mx-2"}>
                <h1>QR Code payment</h1>
                <h4>Scan a pay with your preferred apps</h4>
                <QRCode value={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} size='300'/>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
