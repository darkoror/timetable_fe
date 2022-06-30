import { getTeachers } from '../services/dataService';
import { useQuery } from 'react-query';
import Teacher from './Teacher';

function Teachers() {
  const { data, status } = useQuery('teachers', getTeachers);

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : data.data.map((item) => <Teacher key={item.id} item={item} />)}
    </div>
  );
}

export default Teachers;
