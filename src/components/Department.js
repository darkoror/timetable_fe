import React from 'react';
import { Link } from 'react-router-dom';

const Department = ({ item }) => {
  return (
    <Link className="item-box" to={`/departments/${item.id}/groups`}>
      <span>{item.name}</span>
    </Link>
  );
};

export default Department;
