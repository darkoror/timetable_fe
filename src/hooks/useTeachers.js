import { getTeachers } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useTeachers() {
  return useQuery('teachers', getTeachers);
}
