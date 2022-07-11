import { useParams } from 'react-router-dom';
import useSubjects from '../hooks/useSubjects';
import Subject from './Subject';

function Subjects() {
  const urlParams = useParams();
  const { data, status } = useSubjects(urlParams.groupId);

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : data.map((item) => <Subject key={item.id} item={item} />)}
    </div>
  );
}

export default Subjects;
