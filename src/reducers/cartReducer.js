const initialState = {
    cartItems: [],
    cartCounter: 0,
    totalPrice: 0,
    deliveryCharges: 50,
    taxes: 0,
    grandTotal: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingItemIndex !== -1) {
          // Item already in cart, update quantity and price
          const updatedCartItems = state.cartItems.map((item, index) => {
            if (index === existingItemIndex) {
              const newQuantity = item.quantity + 1;
              return {
                ...item,
                quantity: newQuantity,
                total_item_price: newQuantity * item.price,
              };
            }
            return item;
          });
  
          const newTotalPrice = state.totalPrice + action.payload.price;
          const newTaxes = newTotalPrice * 0.18;
  
          return {
            ...state,
            cartItems: updatedCartItems,
            cartCounter: state.cartCounter + 1,
            totalPrice: newTotalPrice,
            taxes: newTaxes,
            grandTotal: newTotalPrice + state.deliveryCharges + newTaxes,
          };
        } else {
          // Item not in cart, add new item
          const newTotalPrice = state.totalPrice + action.payload.price;
          const newTaxes = newTotalPrice * 0.18;
  
          return {
            ...state,
            cartItems: [
              ...state.cartItems,
              {
                ...action.payload,
                quantity: 1,
                total_item_price: action.payload.price,
              },
            ],
            cartCounter: state.cartCounter + 1,
            totalPrice: newTotalPrice,
            taxes: newTaxes,
            grandTotal: newTotalPrice + state.deliveryCharges + newTaxes,
          };
        }
  
      // You can implement REMOVE_FROM_CART here
  
      default:
        return state;
    }
  };
  
  export default cartReducer;