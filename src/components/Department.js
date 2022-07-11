import React from 'react';
import { Link } from 'react-router-dom';

const Department = ({ item }) => {
  return (
    <div>
      <Link to={`/departments/${item.id}/groups`}>{item.name}</Link>
    </div>
  );
};

export default Department;
