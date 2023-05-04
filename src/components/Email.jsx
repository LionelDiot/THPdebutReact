import React from 'react';

const Email = ({firstName, lastName}) => {
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  console.log(firstName, lastName);
  return <a href={`mailto:${email}`}>{email}</a>;
}

export default Email;