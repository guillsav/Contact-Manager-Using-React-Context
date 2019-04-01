import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Contact.css';

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id});
    } catch (e) {
      dispatch({type: 'DELETE_CONTACT', payload: id});
    }

    // With fetch
    // fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    //   method: 'DELETE'
    // }).then(response => dispatch({type: 'DELETE_CONTACT', payload: id}));
  };

  render() {
    const {id, name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className={`Card ${showContactInfo ? 'open' : ''}`}>
              <div className="contact-name">
                <h4>{name} </h4>
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down fa-lg"
                />
              </div>
              <div className="controls">
                <div className="edit">
                  <Link to={`contact/edit/${id}`}>Edit</Link>
                </div>
                <div className="remove">
                  <button onClick={() => this.onDeleteClick(id, dispatch)}>
                    Delete
                  </button>
                </div>
              </div>
              {showContactInfo ? (
                <div className="card-content">
                  <p>{email}</p>
                  <p>{phone}</p>
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object
};

export default Contact;
