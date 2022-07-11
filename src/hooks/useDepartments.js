import { getDepartments } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useDepartments(universityId) {
  return useQuery(['departments', universityId], () =>
    getDepartments(universityId)
  );
}
