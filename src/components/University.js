import React from 'react';

import { Link } from 'react-router-dom';

const University = ({ item }) => {
  return (
    <Link className="item-box" to={`/universities/${item.id}/departments`}>
      <span>{item.name}</span>
    </Link>
  );
};

export default University;
