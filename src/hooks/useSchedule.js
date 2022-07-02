import { getSchedule } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useSchedule() {
  return useQuery('schedule', getSchedule);
}
