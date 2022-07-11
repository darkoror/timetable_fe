import { useParams } from 'react-router-dom';
import useTeachers from '../hooks/useTeachers';
import Teacher from './Teacher';

function Teachers() {
  const urlParams = useParams();
  const { data, status } = useTeachers(urlParams.groupId);

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : data.map((item) => <Teacher key={item.id} item={item} />)}
    </div>
  );
}

export default Teachers;
