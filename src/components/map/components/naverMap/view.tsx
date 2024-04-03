'use client'
import React, { useEffect, useState } from 'react'
import { latLngToCell, cellToBoundary } from 'h3-js'

declare global {
  interface Window {
    naver: any
    initMap?: () => void
  }
}

type Place = {
  id: number
  lat: number
  lng: number
  naverPlaceId: number
  name: string
  address: string
  tags: string
  createdAt: string
  tip: string
}

const dummy: Place[] = [
  {
    id: 4,
    lat: 37.5628898,
    lng: 126.8511587,
    naverPlaceId: 1425552217,
    name: '타르데마베이커리1942 등촌',
    address: '서울특별시 강서구 양천로 452 어위쉬예다인 1층 109호',
    tags: '디저트카페',
    createdAt: '2024-02-16 04:08:06.68169+00',
    tip: '건물 지하에 주차가능하시고, 1시간 무료 주차권 발급드립니다.'
  },
  {
    id: 5,
    lat: 37.5571388,
    lng: 126.8617327,
    naverPlaceId: 1545675431,
    name: '라토레 커피',
    address: '서울특별시 강서구 양천로 564 1층 127호 라토레커피',
    tags: '디저트카페',
    createdAt: '2024-02-16 04:08:14.811985+00',
    tip: '오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다'
  },
  {
    id: 6,
    lat: 37.5411388,
    lng: 126.8657327,
    naverPlaceId: 1545675431,
    name: '라토레 커피2',
    address: '서울특별시 강서구 양천로 564 1층 127호 라토레커피',
    tags: '디저트카페',
    createdAt: '2024-02-16 04:08:14.811985+00',
    tip: '오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다'
  },
  {
    id: 7,
    lat: 37.5471388,
    lng: 126.8610327,
    naverPlaceId: 1545675431,
    name: '라토레 커피3',
    address: '서울특별시 강서구 양천로 564 1층 127호 라토레커피',
    tags: '디저트카페',
    createdAt: '2024-02-16 04:08:14.811985+00',
    tip: '오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다'
  },
  {
    id: 7,
    lat: 37.5471388,
    lng: 126.8610327,
    naverPlaceId: 1545675431,
    name: '라토레 커피3',
    address: '서울특별시 강서구 양천로 564 1층 127호 라토레커피',
    tags: '디저트카페',
    createdAt: '2024-02-16 04:08:14.811985+00',
    tip: '오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다'
  },
  {
    id: 7,
    lat: 37.5471388,
    lng: 126.8610327,
    naverPlaceId: 1545675431,
    name: '라토레 커피3',
    address: '서울특별시 강서구 양천로 564 1층 127호 라토레커피',
    tags: '디저트카페',
    createdAt: '2024-02-16 04:08:14.811985+00',
    tip: '오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다'
  },
  {
    id: 7,
    lat: 37.5471388,
    lng: 126.8610327,
    naverPlaceId: 1545675431,
    name: '라토레 커피3',
    address: '서울특별시 강서구 양천로 564 1층 127호 라토레커피',
    tags: '디저트카페',
    createdAt: '2024-02-16 04:08:14.811985+00',
    tip: '오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다'
  },
  {
    id: 7,
    lat: 37.5471388,
    lng: 126.8610327,
    naverPlaceId: 1545675431,
    name: '라토레 커피3',
    address: '서울특별시 강서구 양천로 564 1층 127호 라토레커피',
    tags: '디저트카페',
    createdAt: '2024-02-16 04:08:14.811985+00',
    tip: '오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다'
  },
  {
    id: 7,
    lat: 37.5471388,
    lng: 126.8610327,
    naverPlaceId: 1545675431,
    name: '라토레 커피3',
    address: '서울특별시 강서구 양천로 564 1층 127호 라토레커피',
    tags: '디저트카페',
    createdAt: '2024-02-16 04:08:14.811985+00',
    tip: '오피스텔건물 지하 주차장에 주차하시면되고 2시간 무료입니다'
  }
]

const NaverMap: React.FC = () => {
  const [zoomMessageVisible, setZoomMessageVisible] = useState<boolean>(false)

  const zoomLevelToH3Resolution = (zoomLevel: number): number => {
    if (zoomLevel >= 16) return 11
    if (zoomLevel >= 14) return 9
    return 7
  }

  const drawClusters = (map: any) => {
    const zoomLevel = map.getZoom()
    const resolution = zoomLevelToH3Resolution(zoomLevel)
    console.log(zoomLevel, resolution)
    // 지도에 현재 표시된 모든 오버레이(클러스터)를 제거합니다.
    map.getPanes().overlayLayer.innerHTML = ''

    console.log(map)

    dummy.forEach((place) => {
      const h3Index = latLngToCell(place.lat, place.lng, resolution)
      const hexBoundary = cellToBoundary(h3Index)

      const polygonPath = hexBoundary.map(([lat, lng]) => new window.naver.maps.LatLng(lat, lng))
      new window.naver.maps.Polygon({
        map,
        paths: [polygonPath],
        fillColor: '#99CCFF',
        fillOpacity: 0.3,
        strokeColor: '#99CCFF',
        strokeOpacity: 0.1,
        strokeWeight: 1
      })
    })
  }

  const initMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.5471388, 126.8610327),
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        style: window.naver.maps.ZoomControlStyle.SMALL,
        position: window.naver.maps.Position.RIGHT_CENTER
      }
    }

    const naverMap = new window.naver.maps.Map('map', mapOptions)

    // 지도의 줌 레벨이 변경될 때마다 클러스터를 다시 그립니다.
    window.naver.maps.Event.addListener(naverMap, 'zoom_changed', () => {
      console.log(1)
      drawClusters(naverMap)
    })

    // 초기 클러스터링을 진행합니다.
    drawClusters(naverMap)
  }

  useEffect(() => {
    if (!window.naver) {
      const script = document.createElement('script')
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`
      script.async = true
      script.onload = () => {
        if (window.naver && window.naver.maps) {
          initMap()
        } else {
          window.initMap = initMap
        }
      }
      document.head.appendChild(script)
    } else if (!map) {
      initMap()
    }
  }, [])

  return (
    <div id="map" style={{ width: '100%', height: '600px' }}>
      {zoomMessageVisible && (
        <div className="absolute left-1/2 top-0 mt-4 -translate-x-1/2 transform rounded-md bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
          지도를 조금 더 확대하라는 글씨
        </div>
      )}
    </div>
  )
}

export default NaverMap
