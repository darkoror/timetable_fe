import { getSubjects } from '../services/dataService';
import { useQuery } from 'react-query';
import Subject from './Subject';

function Subjects() {
  const { data, status } = useQuery('subjects', getSubjects);

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : data.data.map((item) => <Subject key={item.id} item={item} />)}
    </div>
  );
}

export default Subjects;
