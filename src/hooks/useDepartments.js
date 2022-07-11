import { getDepartments } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useDepartments() {
  return useQuery('schedule', getDepartments);
}
