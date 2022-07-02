import React from 'react';
import useSubjects from '../hooks/useSubjects';
import useTeachers from '../hooks/useTeachers';
import {
  subgroupTypes,
  frequencyTypes,
  lessonTypes,
  weekDays,
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
  const { data: subjects, status: subjectsStatus } = useSubjects();
  const { data: teachers, status: teachersStatus } = useTeachers();

  if (subjectsStatus === 'loading' || teachersStatus === 'loading')
    return <div>...</div>;

  return (
    <div className="lesson-cell">
      <div>{item.lesson_number}</div>-
      <div>{getSubjectNameById(subjects, item.subject_id)}</div>-
      <div>
        <div>
          {item.teachers
            .map((teacherId) => getTeacherNameById(teachers, teacherId))
            .join(', ')}{' '}
          {'-'} {item.auditorium} ауд. - {item.academy_building}
        </div>
      </div>
      -<div>{subgroupTypes[item.subgroup]}</div>-
      <div>{lessonTypes[item.type]}</div>-
      <div>{frequencyTypes[item.frequency]}</div>
    </div>
  );
};

export default ScheduleItem;
