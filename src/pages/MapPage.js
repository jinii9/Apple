import React from 'react';
import { Map } from "react-kakao-maps-sdk";
import "../assets/map.css"

function MapPage() {
  return (
    <div className='bg-gray-100'>
      <div className="flex justify-center font-medium">
        <h1 className='mb-3 text-4xl'>근처 매장</h1>
        </div>
    <div className="container px-5 mx-auto ">
      <Map
        center={{ lat: 37.440701, lng: 126.970667 }}
        className="border-4 rounded-3xl w-full h-96 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]" 
        level={3}
      />  
      </div>
    </div>
  );
}

export default MapPage;