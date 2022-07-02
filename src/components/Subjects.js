import useSubjects from '../hooks/useSubjects';
import Subject from './Subject';

function Subjects() {
  const { data, status } = useSubjects();

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : data.map((item) => <Subject key={item.id} item={item} />)}
    </div>
  );
}

export default Subjects;
