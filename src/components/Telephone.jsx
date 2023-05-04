import React from 'react';
import { faker } from '@faker-js/faker';

const Telephone = () => {
  return <span>{faker.phone.number()}</span> ;
}

export default Telephone;