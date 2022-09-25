import { useParams } from 'react-router-dom';
import useGroups from '../hooks/useGroups';
import Group from './Group';

function Groups() {
  const urlParams = useParams();
  const { data, status } = useGroups(urlParams.departmentId);

  return (
    <div className="entity-selection">
      {status === 'loading'
        ? 'Loading...'
        : data.map((item) => <Group key={item.id} item={item} />)}
    </div>
  );
}

export default Groups;
