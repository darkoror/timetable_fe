import { getSubjects } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useSubjects(groupId) {
  return useQuery(['subjects', groupId], () => getSubjects(groupId));
}
