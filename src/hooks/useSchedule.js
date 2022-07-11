import { getSchedule } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useSchedule(groupId) {
  return useQuery(['schedule', groupId], () => getSchedule(groupId));
}
