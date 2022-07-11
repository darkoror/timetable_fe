import axios from 'axios';

export const baseUrl = 'http://api.time-table.pp.ua/api';

export const getSchedule = async (groupId) => {
  return axios
    .get(`${baseUrl}/groups/${groupId}/lessons/`)
    .then((res) => res.data);
};

export const getTeachers = async (groupId) => {
  return axios
    .get(`${baseUrl}/groups/${groupId}/teachers/`)
    .then((res) => res.data);
};

export const getSubjects = async (groupId) => {
  return axios
    .get(`${baseUrl}/groups/${groupId}/subjects/`)
    .then((res) => res.data);
};

export const getUniversities = async () => {
  return axios.get(`${baseUrl}/universities/`).then((res) => res.data);
};

export const getDepartments = async (universityId) => {
  return axios
    .get(`${baseUrl}/universities/${universityId}/departments/`)
    .then((res) => res.data);
};

export const getGroups = async (departmentId) => {
  return axios
    .get(`${baseUrl}/departments/${departmentId}/groups/`)
    .then((res) => res.data);
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
