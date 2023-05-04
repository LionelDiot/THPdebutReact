import React from 'react';
import { faker } from '@faker-js/faker';
import Customer from './Customer';
import { Row, Col } from 'react-bootstrap';
const Customers = () => {
  const customersList = Array.from({ length: 10 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    photo: faker.image.avatar(),
    job: faker.name.jobTitle(),
  }));
  
  return (
    <Row>
      {customersList.map((customerData) => (
        <Col sm={3}  key={customerData.id}>
        <Customer data={customerData} key={customerData.id} />
        </Col>
      ))}
    </Row>
      
    
  );
};

export default Customers;
