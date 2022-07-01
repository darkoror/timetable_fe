import React from 'react';
import { useQuery } from 'react-query';
import {
  subgroupTypes,
  frequencyTypes,
  lessonTypes,
  weekDays,
  getSubjects,
  getTeachers,
} from '../services/dataService';

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

const ScheduleItem = ({ item }) => {
  const { data: subjects } = useQuery('subjects', getSubjects);
  const { data: teachers } = useQuery('teachers', getTeachers);

  if (subjects === undefined || teachers === undefined) return <div>...</div>;

  return (
    <div className="lesson-cell">
      <div>{weekDays[item.week_day]}</div>-<div>{item.lesson_number}</div>-
      <div>{getSubjectNameById(subjects.data, item.subject_id)}</div>-
      <div>
          <div>
            {item.teachers
              .map((teacherId) => getTeacherNameById(teachers.data, teacherId))
              .join(', ')} {"-"} {item.auditorium} ауд. - {item.academy_building}
          </div>
      </div>
      -<div>{subgroupTypes[item.subgroup]}</div>-
      <div>{lessonTypes[item.type]}</div>-
      <div>{frequencyTypes[item.frequency]}</div>
    </div>
  );
};

export default ScheduleItem;
