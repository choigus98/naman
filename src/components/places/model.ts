export class PlaceModel {
  id: number
  lat: number
  lng: number
  naverPlaceId: number
  name: string
  address: string
  tags: string
  createdAt: string
  tip: string

  constructor(
    id: number,
    lat: number,
    lng: number,
    naverPlaceId: number,
    name: string,
    address: string,
    tags: string,
    createdAt: string,
    tip: string
  ) {
    this.id = id
    this.lat = lat
    this.lng = lng
    this.naverPlaceId = naverPlaceId
    this.name = name
    this.address = address
    this.tags = tags
    this.createdAt = createdAt
    this.tip = tip
  }
}
