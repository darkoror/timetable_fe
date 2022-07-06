import ScheduleItem from './ScheduleItem';
import { weekDays } from '../services/dataService';
import groupBy from '../utils/groupBy';

function ScheduleDay({ data, weekDay }) {
  const groupedData = groupBy(data, 'lesson_number');
  return (
    <div className="schedule-day">
      <div className="day-label">{weekDays[weekDay]}</div>
      <div>
        {Object.keys(groupedData).map((item) => (
          <ScheduleItem
            key={item}
            data={groupedData[item]}
            lessonNumber={item}
          />
        ))}
      </div>
    </div>
  );
}

export default ScheduleDay;
