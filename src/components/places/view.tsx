'use client'
import React, { useEffect, useState } from 'react'
import { usePlacesViewModel } from './viewModel'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import type { AccordionProps, AccordionHeaderProps } from '@material-tailwind/react'

const dummy = [
  {
    "id": 4,
    "lat": 37.5628898,
    "lng": 126.8511587,
    "naverPlaceId": 1425552217,
    "name": "타르데마베이커리1942 등촌",
    "address": "서울특별시 강서구 양천로 452 어위쉬예다인 1층 109호",
    "tags": "디저트카페",
    "createdAt": "2024-02-16 04:08:06.68169+00",
    "tip": "건물 지하에 주차가능하시고, 1시간 무료 주차권 발급드립니다."
  },
  {
    "id": 5,
    "lat": 37.5571388,
    "lng": 126.8617327,
    "naverPlaceId": 1545675431,
    "name": "라토레 커피",
    "address": "서울특별시 강서구 양천로 564 1층 127호 라토레커피",
    "tags": "디저트카페",
    "createdAt": "2024-02-16 04:08:14.811985+00",
    "tip": "오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다"
  },
  {
    "id": 6,
    "lat": 37.4471388,
    "lng": 126.8617327,
    "naverPlaceId": 1545675431,
    "name": "라토레 커피2",
    "address": "서울특별시 강서구 양천로 564 1층 127호 라토레커피",
    "tags": "디저트카페",
    "createdAt": "2024-02-16 04:08:14.811985+00",
    "tip": "오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다"
  },
  {
    "id": 7,
    "lat": 37.3371388,
    "lng": 126.8617327,
    "naverPlaceId": 1545675431,
    "name": "라토레 커피3",
    "address": "서울특별시 강서구 양천로 564 1층 127호 라토레커피",
    "tags": "디저트카페",
    "createdAt": "2024-02-16 04:08:14.811985+00",
    "tip": "오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다"
  }
]


const PlacesView: React.FC = () => {
  const { places, isLoading, error ,isSuccess } = usePlacesViewModel()
  const [openPanels, setOpenPanels] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    if (places) {
      const init = places.reduce<{ [key: string]: boolean }>((acc, place) => {
        acc[place.id] = false
        return acc
      }, {})
      setOpenPanels(init)
    }
  }, [places])

  const togglePanel = (id: number) => {
    const newOpenPanels = { ...openPanels, [id]: !openPanels[id] }
    console.log(newOpenPanels)
    setOpenPanels(newOpenPanels)
  }

  if (isLoading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-5">Error loading places: {error.message}</div>;

  return (
      <div className="w-full p-5 bg-white bg-opacity-90 rounded-lg shadow h-full">
        {places != null ? (
          places.map((place) => (
            <Accordion key={place.id} open={openPanels[place.id]} className="mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <AccordionHeader
                onClick={() => togglePanel(place.id)}
                className="p-4 font-semibold text-lg text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                {place.name} <span className=" text-sm text-gray-050 ml-1 mt-1 ">{place.tags}</span>
              </AccordionHeader>
              <AccordionBody className="text-gray-500">
                <div className="p-4 border-t">
                  <p>{place.address}</p>
                  <p className="mt-2">{place.tip}</p>
                </div>
              </AccordionBody>
            </Accordion>
          ))
        ) : (
          <div className="text-center text-gray-500">No places found.</div>
        )}
      </div>
  );
};

export default PlacesView;