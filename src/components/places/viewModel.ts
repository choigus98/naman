// hooks/usePlacesViewModel.ts
import { useQuery } from '@tanstack/react-query'
import { fetchPlaces } from '@/api/dummy'

export const usePlacesViewModel = () => {
  const places = useQuery({
    queryKey: ['dummy', 'places'],
    queryFn: fetchPlaces
  })

  return { places: places.data, isLoading: places.isLoading, error: places.error, isSuccess: places.isSuccess }
}
