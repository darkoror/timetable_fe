import axios from 'axios';

export const baseUrl = 'https://api.time-table.pp.ua/api';

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
  0: 'Понеділок',
  1: 'Вівторок',
  2: 'Середа',
  3: 'Четвер',
  4: 'П\'ятниця',
  5: 'Субота',
  6: 'Неділя',
};

export const lessonTypes = {
  0: 'Лекція',
  1: 'Практична',
  2: 'Лабораторна',
  3: 'Семінар',
};

export const subgroupTypes = {
  0: 'Ціла група',
  1: 'Підгрупа 1',
  2: 'Підгрупа 2',
};

export const frequencyTypes = {
  0: 'Щотижня',
  1: 'Чисельник',
  2: 'Знаменник',
};
