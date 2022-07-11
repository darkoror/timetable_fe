import useDepartment from '../hooks/useDepartments';
import Department from './Department';

function Departments() {
  const { data, status } = useDepartment();

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : data.map((item) => <Department key={item.id} item={item} />)}
    </div>
  );
}

export default Departments;
