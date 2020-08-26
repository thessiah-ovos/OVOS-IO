import { BEAT_LIST_REQUEST, BEAT_LIST_SUCCESS, BEAT_LIST_FAIL, BEAT_DETAILS_FAIL, BEAT_DETAILS_SUCCESS, BEAT_DETAILS_REQUEST, BEAT_SAVE_REQUEST, BEAT_SAVE_SUCCESS, BEAT_SAVE_FAIL, BEAT_DELETE_REQUEST, BEAT_DELETE_SUCCESS, BEAT_DELETE_FAIL } from "../constants/beatConstants";

function beatListReducer(state = { products: [] }, action) {
    
    switch (action.type) {
        case BEAT_LIST_REQUEST:
            return { loading: true, products: [] };
        case BEAT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case BEAT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function beatDetailsReducer(state = { product: {} }, action) {
    
    switch (action.type) {
        case BEAT_DETAILS_REQUEST:
            return { loading: true };
        case BEAT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case BEAT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function beatDeleteReducer(state = { product: {} }, action) {
    switch (action.type) {
      case BEAT_DELETE_REQUEST:
        return { loading: true };
      case BEAT_DELETE_SUCCESS:
        return { loading: false, product: action.payload, success: true };
      case BEAT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function beatSaveReducer(state = { product: {} }, action) {
    switch (action.type) {
      case BEAT_SAVE_REQUEST:
        return { loading: true };
      case BEAT_SAVE_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case BEAT_SAVE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

export { beatListReducer, beatDetailsReducer, beatDeleteReducer, beatSaveReducer }