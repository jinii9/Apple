import { useResizeHandler } from "../hooks/useResizeHandler";

function ShopCardsNavFooter() {
  const { containerStyle, slidesOffsetBefore, isReady } = useResizeHandler();

  return (
    <div
      className="mx-[22px] min-h-[196px] relative w-auto lg:mx-[140px] lg:mt-10"
      style={containerStyle}
    >
      <div>
        <h1 className="text-2xl font-bold">빠른 링크</h1>
      </div>

      {/* 버튼 리스트 */}
      <div className="flex flex-nowrap space-x-4 mt-6 overflow-x-auto">
        <button className="text-xs md:text-sm px-2 md:px-4 py-2 border border-black rounded-full  hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">
          주문 상태
        </button>
        <button className="text-xs md:text-sm px-2 md:px-4 py-2 border border-black rounded-full  hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">
          쇼핑 도움말
        </button>
        <button className="text-xs md:text-sm px-3 md:px-4 py-2 border border-black rounded-full  hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">
          반품
        </button>
        <button className="text-xs md:text-sm px-3 md:px-4 py-2 border border-black rounded-full  hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">
          관심 목록
        </button>
      </div>
    </div>
  );
}

export default ShopCardsNavFooter;
