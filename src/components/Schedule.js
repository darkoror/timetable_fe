import useSchedule from '../hooks/useSchedule';
import ScheduleItem from './ScheduleItem';

function Schedule() {
  const { data, status } = useSchedule();

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : data.map((item, index) => <ScheduleItem key={index} item={item} />)}
    </div>
  );
}

export default Schedule;
