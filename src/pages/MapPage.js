import React, { useState, useEffect } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';
import axios from 'axios'; 
import "../assets/map.css";
import searchIcon from '../assets/search_icon.svg';
import logo from '../assets/images/header/logo.svg'
import marker from '../assets/marker_s.png';

function MapPage() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState({ lat: 37.440701, lng: 126.970667 }); 
  const [address, setAddress] = useState(''); 
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPosition, setSelectedPosition] = useState(null); // 추가된 부분

  const positions = [
    {
      title: "Apple 하남",
      add1:"경기 하남시 미사대로 750",
      add2:"스타필드 하남, 1F",
      latlng: { lat: 37.546019838024, lng: 127.2243005893 },
    },
    {
      title: "Apple 여의도",
      add1:"서울 영등포구 국제금융로 10",
      add2:"IFC MALL, L1",
      latlng: { lat: 37.525805662536, lng: 126.92660958103 },
    },
    {
      title: "Apple 홍대",
      add1:"서울 마포구",
      add2:"양화로 140",
      latlng: { lat: 37.553414, lng: 126.918591 },
    },
    {
      title: "Apple 강남",
      add1:"서울 강남구",
      add2:"강남대로 464",
      latlng: { lat: 37.503699, lng: 127.025319 },
    },
    {
      title: "Apple 명동",
      add1:"서울 중구 남대문로 2가 9-1",
      add2:"하이드파크",
      latlng: { lat: 37.564681, lng: 126.982794 },
    },
    {
      title: "Apple 가로수길",
      add1:"서울 강남구",
      add2:"가로수길 43",
      latlng: { lat: 37.520836, lng: 127.022708 },
    },
    {
      title: "Apple 잠실",
      add1:"서울 송파구 올림픽로 300",
      add2:"롯데월드몰 1F",
      latlng: { lat: 37.513907, lng: 127.104042 },
    },
    {
      title: "현재 위치",
      add1:"",
      add2:"",
      latlng: location,
    },
  ];

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
      <div className="container px-10 pb-4 mx-auto mt-10">
        <div className="flex flex-col items-center justify-center pt-5 mb-4 sm:flex-row">
          <h1 className="px-4 mb-4 text-xl font-bold sm:mb-0">매장 찾기</h1>
          <div className="flex justify-center w-full max-w-md mx-auto transition duration-200 sm:w-6/12 hover:scale-110 hover:shadow-lg ">
            <div className="flex items-center w-full bg-white border-2 border-gray-300 rounded-xl">
              <button
                className="px-2 text-lg text-white transition"
                onClick={handleSearch}
              >
                <img src={searchIcon} alt="검색" className="w-6 h-6" />
              </button>
              <input
                type="text"
                className="flex-grow py-2 text-xs font-semibold bg-transparent outline-none md:text-sm px"
                placeholder="위치, 우편번호 또는 매장 이름으로 검색"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <a
            className="flex mt-4 text-sm font-semibold text-blue-400 hover:underline sm:mt-0"
            href="https://www.apple.com/kr/retail/storelist/"
          >
            전체 매장 목록
            <span className="ml-1 text-gray-400 ">{">"}</span>
          </a>
        </div>

        {!isLoading && (
          <div className="relative">
            <Map
              center={location}
              className="animate-slideUp border-4 rounded-3xl w-full h-96 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
              level={3}
            >
              {positions.map((pos, index) => (
                <MapMarker
                  key={index}
                  position={pos.latlng}
                  title={pos.title}
                  image={{
                    src: marker,
                    size: {
                      width: 64,
                      height: 69,
                    },
                    options: {
                      offset: {
                        x: 27,
                        y: 69,
                      },
                    },
                  }}
                  onClick={() => setSelectedPosition(pos)} 
                />
              ))}
              <img
                src={logo}
                alt="logo"
                className="absolute bottom-0 z-10 w-16 h-16 m-2 left-1 animate-slideUp"
              />
            </Map>
            {selectedPosition && ( 
              <div className="absolute z-10 p-2 bg-white border border-gray-300 rounded-2xl top-4 left-4">
                <h2 className="text-lg font-bold">{selectedPosition.title}</h2>
                <p>{selectedPosition.add1}</p>
                <p>{selectedPosition.add2}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MapPage;