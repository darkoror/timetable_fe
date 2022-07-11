import React from 'react';

import { Link, useLocation } from 'react-router-dom';

const University = ({ item }) => {
  const location = useLocation();
  return (
    <div>
      <Link to={`${location.pathname}/${item.id}/departments`}>
        {item.name}
      </Link>
    </div>
  );
};

export default University;
