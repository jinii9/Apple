import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Correct Swiper CSS import

// Product card data (replace with real data or props)
const products = [
  {
    title: "Mac",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666",
    link: "/kr/shop/buy-mac",
  },
  {
    title: "iPhone",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723857138230",
    link: "/kr/shop/buy-iphone",
  },
  {
    title: "iPad",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875",
    link: "/kr/shop/buy-ipad",
  },
  {
    title: "Apple Watch",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838",
    link: "/kr/shop/buy-watch",
  },
  {
    title: "AirPods",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822",
    link: "https://www.apple.com/kr/airpods",
  },
  {
    title: "AirTag",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
    link: "/kr/shop/accessories/all/airtag",
  },
  {
    title: "Apple TV 4K",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
    link: "/kr/shop/tv",
  },
  {
    title: "액세서리",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174",
    link: "/kr/shop/accessories/all",
  },
];

const StoreCardsShelf = () => {
    return (
      <div className="rs-cardsshelf rs-productnav-cardsshelf py-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            // Responsive breakpoints
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {/* Map over the products array */}
          {/** Commented out due to the user's request */}
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="rf-cards-scroller-itemview text-center">
                <div className="rf-productnav-card-content rounded-[18px] box-border min-w-[136px] overflow-hidden p-[18px_8px_16px]">
                  <div className="rf-productnav-card-image mb-2">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="rf-productnav-card-info">
                    <a
                      href={product.link}
                      className="rf-productnav-card-title text-lg font-semibold text-gray-800 hover:text-blue-500"
                    >
                      {product.title}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default StoreCardsShelf;