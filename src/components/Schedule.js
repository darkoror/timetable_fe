import { getSchedule } from '../services/dataService';
import { useQuery } from 'react-query';
import ScheduleItem from './ScheduleItem';

function Schedule() {
  const { data, status } = useQuery('schedule', getSchedule);

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : data.data.map((item, index) => (
            <ScheduleItem key={index} item={item} />
          ))}
    </div>
  );
}

export default Schedule;
