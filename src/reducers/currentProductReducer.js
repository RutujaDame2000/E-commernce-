

let parseProduct = null;
let storedProduct = localStorage.getItem('currentProduct');

// Check if storedProduct is not null
if (storedProduct && storedProduct !== undefined) {
  parseProduct = storedProduct?JSON.stringify(storedProduct):null
}

let initialState = {
  product: parseProduct,
};

const currentProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PRODUCT':
      
      // Store the new product in localStorage
      localStorage.setItem('currentProduct', JSON.stringify(action.payload));

      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default currentProductReducer;
