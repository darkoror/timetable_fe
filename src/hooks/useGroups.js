import { getGroups } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useGroups(departmentId) {
  return useQuery(['groups', departmentId], () => getGroups(departmentId));
}
