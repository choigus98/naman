'use client'
import React, { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    initMap?: () => void
  }
}

const NaverMap = () => {
  
  const initMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.4767276, 126.97474),
      scale: 2,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.RIGHT_CENTER
      },
      markers: {
        type: 'd', // 마커 타입 : d(default), n(number), a(alphabet), t(tooltip)
        size: 'mid', // 마커 사이즈 : tiny, small, mid
        color: '0x0099ff', // 마커 컬러
        viewSizeRatio: 0.5 // 마커 크기 비율 : min: 0.1 max: 2.0 (기본 1.0)
      }
    }

    const map = new window.naver.maps.Map('map', mapOptions)
  }

  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement('script')
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`
      script.async = true
      script.onload = () => {
        if (window.initMap) {
          window.initMap()
        } else {
          window.initMap = initMap
        }
      }
      document.head.appendChild(script)
    }

    if (window.naver && window.naver.maps) {
      initMap()
    } else {
      window.initMap = initMap
      loadMapScript()
    }
  }, []) // 빈 배열을 전달하여 최초 렌더링 시에만 실행되도록 함

  return <div id="map" style={{ width: '100%', height: '600px' }}></div>
}

export default NaverMap
