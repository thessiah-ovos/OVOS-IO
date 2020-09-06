import { BEAT_DETAILS_REQUEST, BEAT_DETAILS_SUCCESS, BEAT_DETAILS_FAIL, BEAT_SAVE_REQUEST, BEAT_SAVE_SUCCESS, BEAT_SAVE_FAIL, BEAT_DELETE_REQUEST, BEAT_DELETE_SUCCESS, BEAT_DELETE_FAIL } from '../constants/beatConstants';
import { BEAT_LIST_REQUEST, BEAT_LIST_SUCCESS, BEAT_LIST_FAIL } from '../constants/beatConstants';
import axios from 'axios';
import Axios from 'axios';

const listBeats = () => async (dispatch) => {
    try {
        dispatch({ type: BEAT_LIST_REQUEST });
        const { data } = await axios.get("/api/products");
        dispatch({ type: BEAT_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: BEAT_LIST_FAIL, payload: error.message });

    }

};

const saveBeat = (product) => async (dispatch, getState) => {
    try {
      dispatch({ type: BEAT_SAVE_REQUEST, payload: product });
      const {
        userSignin: { userInfo },
      } = getState();
      if (!product._id) {
        const { data } = await Axios.post('/api/products', product, {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        });
        dispatch({ type: BEAT_SAVE_SUCCESS, payload: data });
      } else {
        const { data } = await Axios.put(
          '/api/products/' + product._id,
          product,
          {
            headers: {
              Authorization: 'Bearer ' + userInfo.token,
            },
          }
        );
        dispatch({ type: BEAT_SAVE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: BEAT_SAVE_FAIL, payload: error.message });
    }
  };

const detailsBeat = (beatId) => async (dispatch) => {
    try {
        dispatch({ type: BEAT_DETAILS_REQUEST, payload: beatId });
        const { data } = await axios.get("/api/products/" + beatId);
        dispatch({type: BEAT_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: BEAT_DETAILS_FAIL, payload: error.message });
    }
};

const deleteBeat = (beatId) => async (dispatch, getState) => {
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      dispatch({ type: BEAT_DELETE_REQUEST, payload: beatId });
      const { data } = await axios.delete('/api/products/' + beatId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: BEAT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: BEAT_DELETE_FAIL, payload: error.message });
    }
  };
  //
export { 
    listBeats,
    detailsBeat,
    saveBeat,
    deleteBeat
}