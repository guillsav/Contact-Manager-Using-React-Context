import React, {Component} from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

import './AddContact.css';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = (dispatch, e) => {
    e.preventDefault();

    const {name, email, phone} = this.state;

    // Check for Errors
    if (name === '') {
      this.setState({errors: {name: 'Name is Required'}});
      return;
    }

    if (email === '') {
      this.setState({errors: {email: 'Email is Required'}});
      return;
    }
    if (phone === '') {
      this.setState({errors: {phone: 'Phone is Required'}});
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      email,
      phone
    };
    dispatch({type: 'ADD_CONTACT', payload: newContact});

    // Clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  render() {
    const {name, email, phone, errors} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="AddContact">
              <div className="card-title">
                <h2 className="header-2">
                  <span className="stand-out">Add </span>Contact
                </h2>
              </div>
              <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                <div className="form-content">
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onInputChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onInputChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Name..."
                    value={phone}
                    onChange={this.onInputChange}
                    error={errors.phone}
                  />
                  <input
                    className="Add-contact-btn"
                    type="submit"
                    value="Add Contact"
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
