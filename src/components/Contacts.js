import React, {Component} from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: Date.now(),
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: Date.now() + 1,
          name: 'Karen Williams',
          email: 'karenw@gmail.com',
          phone: '333-333-3333'
        },
        {
          id: Date.now() + 1,
          name: 'Henry Johnson',
          email: 'henryj@gmail.com',
          phone: '111-111-1111'
        }
      ]
    };
  }
  render() {
    const {contacts} = this.state;
    return (
      <div>
        {contacts.map(({id, name, email, phone}) => {
          return <Contact key={id} name={name} email={email} phone={phone} />;
        })}
      </div>
    );
  }
}

export default Contacts;
