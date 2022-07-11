import axios from 'axios';

export const baseUrl = 'http://time-table.pp.ua/api';

export const getSchedule = async () => {
  return axios.get(`${baseUrl}/groups/1/lessons/`).then((res) => res.data);
};

export const getTeachers = async () => {
  return axios.get(`${baseUrl}/groups/1/teachers/`).then((res) => res.data);
};

export const getSubjects = async () => {
  return axios.get(`${baseUrl}/groups/1/subjects/`).then((res) => res.data);
};

export const getUniversities = async () => {
  return axios.get(`${baseUrl}/universities/`).then((res) => res.data);
};

export const getDepartments = async () => {
  return axios
    .get(`${baseUrl}/universities/1/departments/`)
    .then((res) => res.data);
};

export const getGroups = async () => {
  return axios.get(`${baseUrl}/departments/1/groups/`).then((res) => res.data);
};

export const weekDays = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
};

export const lessonTypes = {
  0: 'Lecture',
  1: 'Practical',
  2: 'Lab',
  3: 'Seminar',
};

export const subgroupTypes = {
  0: 'Whole Group',
  1: 'Subgroup 1',
  2: 'Subgroup 2',
};

export const frequencyTypes = {
  0: 'Weekly',
  1: 'Numerator',
  2: 'Denominator',
};
