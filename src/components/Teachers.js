import useTeachers from '../hooks/useTeachers';
import Teacher from './Teacher';

function Teachers() {
  const { data, status } = useTeachers();

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : data.map((item) => <Teacher key={item.id} item={item} />)}
    </div>
  );
}

export default Teachers;
