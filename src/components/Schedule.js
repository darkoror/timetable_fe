import useSchedule from '../hooks/useSchedule';
import ScheduleDay from './ScheduleDay';
import groupBy from '../utils/groupBy';
import { useParams } from 'react-router-dom';

function Schedule() {
  const urlParams = useParams();
  const { data, status } = useSchedule(urlParams.groupId);

  let groupedData = {};

  if (status === 'success') groupedData = groupBy(data, 'week_day');

  return (
    <div className='grid grid-cols-5 gap-4'>
      {status === 'loading'
        ? 'Loading...'
        : Object.keys(groupedData).map((item) => (
            <ScheduleDay key={item} data={groupedData[item]} weekDay={item} />
          ))}
    </div>
  );
}

export default Schedule;
