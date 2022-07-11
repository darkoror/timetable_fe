import React from 'react';
import { Link } from 'react-router-dom';

const Group = ({ item }) => {
  return (
    <div>
      <Link to={`/groups/${item.id}/schedule`}>{item.name}</Link>
    </div>
  );
};

export default Group;
