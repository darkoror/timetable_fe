import useDepartments from '../hooks/useDepartments';
import Department from './Department';

import { useParams } from 'react-router-dom';

function Departments() {
  const urlParams = useParams();
  const { data, status } = useDepartments(urlParams.universityId);
  return (
    <div className="entity-selection">
      {status === 'loading'
        ? 'Loading...'
        : data.length === 0
        ? 'No available departments'
        : data.map((item) => <Department key={item.id} item={item} />)}
    </div>
  );
}

export default Departments;
