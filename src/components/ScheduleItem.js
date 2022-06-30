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

  return (
    <div>
      {subjects === undefined || teachers === undefined
        ? '...'
        : `${weekDays[item.week_day]} - ${item.lesson_number} -
          ${getSubjectNameById(subjects.data, item.subject_id)} -
          ${item.teachers
            .map((teacherId) => getTeacherNameById(teachers.data, teacherId))
            .join(', ')} - 
            ${subgroupTypes[item.subgroup]} - 
            ${lessonTypes[item.type]} - 
            ${frequencyTypes[item.frequency]}`}
    </div>
  );
};

export default ScheduleItem;
