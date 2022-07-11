import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Group = ({ item }) => {
  const location = useLocation();
  return (
    <div>
      <Link to={`${location.pathname}/${item.id}/schedule`}>{item.name}</Link>
    </div>
  );
};

export default Group;
