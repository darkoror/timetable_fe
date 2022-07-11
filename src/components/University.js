import React from 'react';

import { Link } from 'react-router-dom';

const University = ({ item }) => {
  return (
    <div>
      <Link to={`/universities/${item.id}/departments`}>{item.name}</Link>
    </div>
  );
};

export default University;
