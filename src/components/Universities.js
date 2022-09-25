import useUniversities from '../hooks/useUniversities';
import University from './University';

function Universities() {
  const { data, status } = useUniversities();

  return (
    <div className="entity-selection">
      {status === 'loading'
        ? 'Loading...'
        : data.length === 0
        ? 'No available universities'
        : data.map((item) => <University key={item.id} item={item} />)}
    </div>
  );
}

export default Universities;
