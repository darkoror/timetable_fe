import React from 'react';
import useSubjects from '../hooks/useSubjects';
import useTeachers from '../hooks/useTeachers';
import { lessonTypes } from '../services/dataService';

const getSubjectNameById = (subjects, id) => {
  const result = subjects.find((subject) => {
    return subject.id === id;
  });
  if (result === undefined) return;

  return result.name;
};

const getTeacherNameById = (teachers, id) => {
  const result = teachers.find((teacher) => {
    return teacher.id === id;
  });
  if (result === undefined) return;

  return result.short_name;
};

const ScheduleItem = ({ data, lessonNumber }) => {
  const { data: subjects, status: subjectsStatus } = useSubjects();
  const { data: teachers, status: teachersStatus } = useTeachers();

  if (subjectsStatus === 'loading' || teachersStatus === 'loading')
    return <div>...</div>;

  data.sort((a, b) => a.subgroup - b.subgroup);
  return (
    <div className="flex-row">
      <div className="day-label">{lessonNumber}</div>
      <div className={'lesson-cell'}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`box ${
              item.subgroup === 0
                ? 'whole-group'
                : item.subgroup === 1
                ? 'subgroup-1'
                : 'subgroup-2'
            } ${
              item.frequency === 0
                ? 'weekly'
                : item.frequency === 1
                ? 'numerator'
                : 'denominator'
            }`}
          >
            <div>{getSubjectNameById(subjects, item.subject_id)}</div>
            <div>
              <div>
                {item.teachers
                  .map((teacherId) => getTeacherNameById(teachers, teacherId))
                  .join(', ')}{' '}
                {item.auditorium} ауд. {item.academy_building}
              </div>
            </div>
            <div>{lessonTypes[item.type]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleItem;
