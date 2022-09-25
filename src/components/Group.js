import React from 'react';
import { Link } from 'react-router-dom';

const Group = ({ item }) => {
  return (
    <Link className="item-box" to={`/groups/${item.id}/schedule`}>
      <span>{item.name}</span>
    </Link>
  );
};

export default Group;
