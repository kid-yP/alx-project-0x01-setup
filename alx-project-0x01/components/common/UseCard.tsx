import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500">@{username}</p>
      <p>Email: <a href={`mailto:${email}`} className="text-blue-600">{email}</a></p>
      <p>Phone: {phone}</p>
      <p>Website: <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">{website}</a></p>
      <p>Address: {address.street}, {address.city}</p>
      <p>Company: {company.name}</p>
      <p className="italic">"{company.catchPhrase}"</p>
    </div>
  );
};

export default UserCard;
