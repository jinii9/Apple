import React, { useState, useEffect } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';
import axios from 'axios'; 
import "../assets/map.css";
import searchIcon from '../assets/search_icon.svg';
import logo from '../assets/images/header/logo.svg'


function MapPage() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState({ lat: 37.440701, lng: 126.970667 }); 
  const [address, setAddress] = useState(''); 
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
 
    const fetchCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lng: longitude });
            setIsLoading(false); 
          },
          (error) => {
            console.error("현재 위치를 가져오는 중 오류 발생:", error);
            setIsLoading(false);
          }
        );
      } else {
        console.error("Geolocation을 지원하지 않는 브라우저입니다.");
        setIsLoading(false);
      }
    };

    fetchCurrentLocation();
  }, []);

  const handleSearch = async () => {
    if (!query) return;

    try {
      const response = await axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json`, {
        headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}` },
        params: { query }
      });

      if (response.data.documents.length > 0) {
        const { y: lat, x: lng, address_name } = response.data.documents[0];
        setLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
        setAddress(address_name); 
      } else {
        alert('해당 위치를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error("검색 오류:", error);
      alert('검색 중 오류가 발생했습니다.');
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("현재 위치를 가져오는 중 오류 발생:", error);
        }
      );
    } else {
      console.error("Geolocation을 지원하지 않는 브라우저입니다.");
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="container px-5 pb-4 mx-auto mt-10">
        <div className="flex flex-col items-center justify-center pt-4 mb-4 sm:flex-row">
          <h1 className="mb-4 text-xl font-bold sm:mb-0">매장 찾기</h1>
          
          <div className="flex justify-center w-full max-w-md mx-auto sm:w-6/12">
          <div className="flex items-center w-full bg-white border-2 border-gray-300 rounded-xl">
              <button
                className="px-2 text-lg text-white transition"
                onClick={handleSearch}
              >
                <img
                  src={searchIcon}
                  alt="검색"
                  className="w-6 h-6"
                />
              </button>
              <input
                type="text"
                className="flex-grow px-4 py-2 text-sm bg-transparent outline-none"
                placeholder="위치, 우편번호 또는 매장 이름으로 검색"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <a
                className="flex mt-4 text-xs font-medium text-blue-500 hover:underline sm:mt-0"
                href="https://www.apple.com/kr/retail/storelist/"
              >
                전체  매장 목록
                <span className="ml-1 text-gray-400 ">{'>'}</span>
              </a>
        </div>

        {!isLoading && (
          <div className="relative">
            <Map
              center={location}
              className="border-4 rounded-3xl w-full h-96 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
              level={3}
            >
              <MapMarker position={location}>
              </MapMarker>
              <img src={logo} alt="logo" className="absolute bottom-0 left-0 z-10 w-16 h-16 m-2" />
            </Map>
          </div>
        )}
      </div>
    </div>
  );
}


export default MapPage;
