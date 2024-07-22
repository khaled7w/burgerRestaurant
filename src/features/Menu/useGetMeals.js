import { useQuery } from 'react-query';
import { fetchMeals } from '../../services/fetchMeals';

export function useGetMeals() {
  const {
    data: meals,
    error,
    isLoading,
  } = useQuery({ queryKey: 'meals', queryFn: fetchMeals });

  return { meals, error, isLoading };
}
