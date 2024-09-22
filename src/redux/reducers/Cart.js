const init = {
  carts: [
    // TODO 임시데이터
    {
      id: "1",
      product_name: `MagSafe형 iPhone 16 투명 케이스`,
      price: "69,000",
      model_code: "A3243",
      overview: [
        "얇고 가벼운 데다 탁월한 그립감을 선사하는 Apple 제작 투명 케이스는 iPhone 16의 아름다운 색상을 그대로 보여 주면서도 폰을 철저히 보호해 줍니다.",
        "투명한 폴리카보네이트와 유연한 소재로 혼합 제작된 이 케이스는 버튼을 딱 맞게 감싸도록 디자인되어 있어 사용이 편리합니다. 또, 이 케이스는 ‘카메라 컨트롤'을 원활하게 사용할 수 있습니다. 사파이어 크리스털에 전도층 처리가 되어 있어 손가락의 작은 움직임까지 카메라 컨트롤에 정확히 전달되죠.",
        "표면은 외부뿐 아니라 내부까지도 긁힘 방지 코팅이 적용되어 있습니다. 또한, 황변 방지에 최적화된 소재와 코팅 덕분에 시간이 지나도 케이스의 색상이 그대로 유지되죠.",
        "iPhone 16과 완벽하게 정렬을 이루는 내장 자석 덕분에 이 케이스는 언제나 마법 같은 탈부착 경험과 더 빠른 무선 충전 기능을 제공합니다. iPhone 충전 시에는 케이스를 씌운 채로 MagSafe 충전기를 착 붙이거나, Qi2 또는 Qi 인증 충전기에 올려 두면 되죠.",
        "모든 Apple 제작 케이스와 마찬가지로, 이 케이스 역시 설계 및 제조 과정 전반에서 수천 시간의 테스트를 거쳤습니다. 덕분에 멋진 디자인은 물론, 긁힘과 낙하 충격으로부터 iPhone을 보호할 수 있는 내구성도 갖추었죠.",
      ],
      in_the_box: [`MagSafe형 iPhone 16 투명 케이스`],
      compatible_devices: [`iPhone 16`],
      isNew: true,
      img: [
        { id: "1", url: "../assets/images/iPhone_16_t_case/MA6A4.jpg" },
        { id: "2", url: "../assets/images/iPhone_16_t_case/MA6A4_AV1.jpg" },
        { id: "3", url: "../assets/images/iPhone_16_t_case/MA6A4_AV2.jpg" },
        { id: "4", url: "../assets/images/iPhone_16_t_case/MA6A4_AV3.jpg" },
        { id: "5", url: "../assets/images/iPhone_16_t_case/MA6A4_AV4.jpg" },
        { id: "6", url: "../assets/images/iPhone_16_t_case/MA6A4_AV5.jpg" },
      ],
    },
  ],
};

const CartReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, carts: [...state.carts, action.payload] };

    case "REMOVE_ITEM":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default CartReducer;
