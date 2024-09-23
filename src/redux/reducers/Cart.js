const init = {
  totalAmount: 0,
  carts: [],
};

const CartReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newTotal = state.totalAmount + action.payload.price;
      return {
        ...state,
        carts: [...state.carts, action.payload],
        totalAmount: newTotal,
      };

    case "REMOVE_ITEM":
      const updatedTotal = state.totalAmount - action.payload.price;
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload.id),
        totalAmount: updatedTotal,
      };

    case "UPDATE_CNT":
      console.log("action", action);

      const updatedCarts = state.carts.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              count: action.payload.count,
              price: (item.price / item.count) * action.payload.count,
            }
          : item
      );

      const newTotalAmount = updatedCarts.reduce(
        (acc, item) => acc + item.price,
        0
      );

      return {
        ...state,
        carts: updatedCarts,
        totalAmount: newTotalAmount,
      };

    default:
      return state;
  }
};

export default CartReducer;
