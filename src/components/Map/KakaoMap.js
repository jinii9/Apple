import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import axios from 'axios'; // 주소 검색용으로 axios를 사용
import "../assets/map.css";

function MapPage() {
  const [query, setQuery] = useState(''); // 검색 입력 필드 상태
  const [location, setLocation] = useState({ lat: 37.440701, lng: 126.970667 }); // 기본 좌표 설정

  const handleSearch = async () => {
    if (!query) return;

    try {
      // 카카오 주소 검색 API로 위치 검색
      const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json`, {
        headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}` },
        params: { query }
      });

      if (response.data.documents.length > 0) {
        const { y: lat, x: lng } = response.data.documents[0];
        setLocation({ lat: parseFloat(lat), lng: parseFloat(lng) }); // 검색된 좌표로 지도 업데이트
      } else {
        alert('해당 위치를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error("검색 오류:", error);
      alert('검색 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className='bg-gray-100'>
      <div className="flex justify-center font-medium">
        {/* 검색 필드 */}
        <div className="w-full max-w-lg mt-10">
          <div className="flex items-center p-2 bg-white border-2 border-gray-300 rounded-full shadow-md">
            <input
              type="text"
              className="flex-grow px-4 py-2 text-lg bg-transparent outline-none"
              placeholder="위치, 우편번호 또는 매장 이름으로 검색"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="px-6 py-2 text-lg text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
              onClick={handleSearch}
            >
              검색
            </button>
          </div>
        </div>
      </div>

      <div className="container px-5 mx-auto mt-16">
        <h1 className='mb-3 text-4xl'>근처 매장</h1>
        <Map
          center={location}
          className="border-4 rounded-3xl w-full h-96 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
          level={3}
        >
          <MapMarker position={location} />
        </Map>
      </div>
    </div>
  );
}

export default MapPage;
