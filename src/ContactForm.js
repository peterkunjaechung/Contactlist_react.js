import React from "react";
import { Form, } from "semantic-ui-react";

class ContactForm extends React.Component {
  state = { name: "", phone: "", };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ name: "", phone: "", });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid
            label="Phone"
            placeholder="Phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default ContactForm;
