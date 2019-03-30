import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardBody, CardText} from 'reactstrap';
import styled from 'styled-components';

const CardDiv = styled.div`
  padding: 30px 15%;
`;

const Contact = props => {
  const {name, email, phone} = props;
  return (
    <CardDiv>
      <Card xs="3">
        <CardHeader tag="h3">{name}</CardHeader>
        <CardBody>
          <CardText tag="h6">{email}</CardText>
          <CardText tag="h6">{phone}</CardText>
        </CardBody>
      </Card>
    </CardDiv>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
