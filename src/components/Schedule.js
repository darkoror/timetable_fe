import useSchedule from '../hooks/useSchedule';
import ScheduleDay from './ScheduleDay';
import groupBy from '../utils/groupBy';

function Schedule() {
  const { data, status } = useSchedule();

  let groupedData = {};

  if (status === 'success') groupedData = groupBy(data, 'week_day');

  return (
    <div>
      {status === 'loading'
        ? 'Loading...'
        : Object.keys(groupedData).map((item) => (
            <ScheduleDay key={item} data={groupedData[item]} weekDay={item} />
          ))}
    </div>
  );
}

export default Schedule;
