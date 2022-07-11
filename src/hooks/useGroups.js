import { getGroups } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useGroups() {
  return useQuery('schedule', getGroups);
}
