import useGroups from '../hooks/useGroups';
import Group from './Group';

function Groups() {
  const { data, status } = useGroups();

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : data.map((item) => <Group key={item.id} item={item} />)}
    </div>
  );
}

export default Groups;
