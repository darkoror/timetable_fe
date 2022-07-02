import { getSubjects } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useSubjects() {
  return useQuery('subjects', getSubjects);
}
