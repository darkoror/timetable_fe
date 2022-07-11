import { getUniversities } from '../services/dataService';
import { useQuery } from 'react-query';

export default function useUniversities() {
  return useQuery('universities', getUniversities);
}
