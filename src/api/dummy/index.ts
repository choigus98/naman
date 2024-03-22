import axios from 'axios'
import { PlaceModel } from '@/components/places/model'

export const fetchPlaces = async (): Promise<PlaceModel[]> => {
  const response = await axios.get<PlaceModel[]>('http://localhost:3000/api/places/dummy.json')
  // console.log(response)
  return response.data
}
