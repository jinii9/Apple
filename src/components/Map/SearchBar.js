import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState(''); // 검색어 상태 관리

  const handleSearch = () => {
    onSearch(query); // 부모 컴포넌트로 검색어 전달
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-lg">
        <div className="flex items-center p-2 bg-white border-2 border-gray-300 rounded-full shadow-md">
          <input
            type="text"
            className="flex-grow px-4 py-2 text-lg bg-transparent outline-none"
            placeholder="위치, 우편번호 또는 매장 이름으로 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // 입력된 검색어 상태 업데이트
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
  );
}

export default SearchBar;
