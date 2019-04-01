import React, {Component} from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

import './AddContact.css';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    const {id} = this.props.match.params;

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = async (dispatch, e) => {
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

    const {id} = this.props.match.params;

    const updatedContact = {
      name,
      email,
      phone
    };

    const res = await axios.patch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedContact
    );
    dispatch({type: 'UPDATE_CONTACT', payload: res.data});

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
                  <span className="stand-out">Edit </span>Contact
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
                    value="Update Contact"
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

export default EditContact;
