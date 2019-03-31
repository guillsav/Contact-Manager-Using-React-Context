import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../context';

import './Contact.css';

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };
  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
  };

  render() {
    const {id, name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="Card">
              <div className="contact-name">
                <h4>{name} </h4>
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{cursor: 'pointer'}}
                />
              </div>
              <div className="remove">
                <button>
                  <i
                    onClick={() => this.onDeleteClick(id, dispatch)}
                    className="fas fa-times"
                  />
                </button>
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
