import { getTeachers } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useTeachers(groupId) {
  return useQuery(['teachers', groupId], () => getTeachers(groupId));
}
