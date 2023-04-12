import * as $ from './actions';

const initialState = {
  DATA: [],
  GET_DATA_REQUEST_STATUS: 0,
  GET_DATA_REQUEST_ERROR: false,

  DATA_ID: [],
  GET_DATA_ID_REQUEST_STATUS: 0,
  GET_DATA_ID_REQUEST_ERROR: false,

  FAVORITE: [],

  CART: [],

  LOADING: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case $.GET_DATA_REQUEST: {
      return {
        ...state,
        GET_DATA_REQUEST_STATUS: 1,
      };
    }
    case $.GET_DATA_REQUEST_SUCCESS: {
      return {
        ...state,
        GET_DATA_REQUEST_STATUS: 2,
        DATA: action.DATA,
      };
    }
    case $.GET_DATA_REQUEST_FAILURE: {
      return {
        ...state,
        GET_DATA_REQUEST_STATUS: 3,
        GET_DATA_REQUEST_ERROR: action.ERROR,
      };
    }
    case $.GET_DATA_REQUEST_END: {
      return {
        ...state,
        GET_DATA_REQUEST_STATUS: 0,
      };
    }



    case $.GET_DATA_ID_REQUEST: {
      return {
        ...state,
        GET_DATA_ID_REQUEST_STATUS: 1,
      };
    }
    case $.GET_DATA_ID_REQUEST_SUCCESS: {
      return {
        ...state,
        GET_DATA_ID_REQUEST_STATUS: 2,
        DATA_ID: action.DATA_ID,
        FAVORITE: action.DATA_ID,
      };
    }
    case $.GET_DATA_ID_REQUEST_FAILURE: {
      return {
        ...state,
        GET_DATA_ID_REQUEST_STATUS: 3,
        GET_DATA_ID_REQUEST_ERROR: action.ERROR,
      };
    }
    case $.GET_DATA_ID_REQUEST_END: {
      return {
        ...state,
        GET_DATA_ID_REQUEST_STATUS: 0,
      };
    }

    case $.ADD_CART_REQUEST: {
      upd_obj = state.CART.findIndex((obj => obj.id == action.CART.id));
      if (upd_obj == -1) {
        action.CART.cartNumber = 1
      } else {
        state.CART[upd_obj].cartNumber = state.CART[upd_obj].cartNumber + 1;
      }

      return {
        ...state,
        CART: upd_obj == -1 ? [...state.CART, action.CART] : state.CART.filter((item, i) => true),
        LOADING:false
      };
    }
    case $.REMOVE_CART_REQUEST:
      upd_obj = state.CART.findIndex((obj => obj.id == action.ID));
      if (upd_obj == -1) {

      } else {
        state.CART[upd_obj].cartNumber = state.CART[upd_obj].cartNumber - 1;
      }

      return {
        ...state,
        CART: state.CART[upd_obj].cartNumber == 0 ? state.CART.filter((item, i) => item.id !== action.ID) : state.CART.filter((item, i) => true),
        LOADING:false
      }
   

      case $.ADD_FAVORITE_REQUEST: {
        upd_obj = state.FAVORITE.findIndex((obj => obj.id == action.FAVORITE.id));
        if (upd_obj == -1) {
          action.FAVORITE.isLike = true
        } else {
          state.FAVORITE[upd_obj].isLike = true;
        }
  
        return {
          ...state,
          FAVORITE: upd_obj == -1 ? [...state.FAVORITE, action.FAVORITE] : state.FAVORITE.filter((item, i) => true),
          LOADING:false
        };
      }
      case $.REMOVE_FAVORITE_REQUEST:
        upd_obj = state.FAVORITE.findIndex((obj => obj.id == action.ID));
        if (upd_obj == -1) {
  
        } else {
          state.FAVORITE[upd_obj].isLike = false;
        }
  
        return {
          ...state,
          FAVORITE: state.FAVORITE[upd_obj].isLike == 0 ? state.FAVORITE.filter((item, i) => item.id !== action.ID) : state.FAVORITE.filter((item, i) => true),
          LOADING:false
        }
    default:
      return state;
  }
};

export { reducer };
