import React from 'react';
import Telephone from './Telephone';
import Email from './Email';
import { Card } from 'react-bootstrap';

const Customer = (props) => {
  const { firstName, lastName, photo, job } = props.data;

  return (
    <Card className="my-3">
      <Card.Img variant="top" src={photo} alt={firstName + ' ' + lastName} />
      <Card.Body>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Text>{job}</Card.Text>
        <Card.Text>Joinable au : <Telephone /> ou par email : <Email firstName={firstName} lastName={lastName} /></Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Customer;