import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Department = ({ item }) => {
  const location = useLocation();
  return (
    <div>
      <Link to={`/departments/${item.id}/groups`}>{item.name}</Link>
    </div>
  );
};

export default Department;
