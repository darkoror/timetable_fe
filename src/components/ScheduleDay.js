import ScheduleItem from './ScheduleItem';
import { weekDays } from '../services/dataService';

function ScheduleDay({ data, weekDay }) {
  return (
    <div className="schedule-day">
      <div className="day-label">{weekDays[weekDay]}</div>
      <div>
        {data.map((item, index) => (
          <ScheduleItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ScheduleDay;
