'use client';
import React, { useEffect } from 'react';
import Script from 'next/script';

declare global {
	interface Window {
		initMap?: () => void;
	}
}

const NaverMapPage = () => {
	const initMap = () => {
		const mapOptions = {
			center: new window.naver.maps.LatLng(37.3595704, 127.105399),
			zoom: 10,
		};

		const map = new window.naver.maps.Map('map', mapOptions);
	};

	useEffect(() => {
		const loadMapScript = () => {
			const script = document.createElement('script');
			script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`;
			script.async = true;
			script.onload = () => {
				if (window.initMap) {
					window.initMap();
				} else {
					window.initMap = initMap;
				}
			};
			document.head.appendChild(script);
		};

		if (window.naver && window.naver.maps) {
			initMap();
		} else {
			window.initMap = initMap;
			loadMapScript();
		}
	}, []); // 빈 배열을 전달하여 최초 렌더링 시에만 실행되도록 함

	return <div id="map" style={{ width: '80%', height: '600px' }}></div>;
};

export default NaverMapPage;
