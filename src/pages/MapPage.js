import React from 'react';
import { Map } from "react-kakao-maps-sdk";

function MapPage() {
  return (
    <div>
      <div className="flex justify-center font-extrabold">
        <h1 className='mb-3 text-3xl' style={{ fontFamily: "" }}>매장 찾기</h1>
        </div>
    <div className="container px-5 mx-auto ">
      <Map
        center={{ lat: 36.450701, lng: 126.570667 }}
        className="border-4 rounded-3xl w-full h-96 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]" 
        level={3}
      />  
      </div>
    </div>
  );
}

export default MapPage;