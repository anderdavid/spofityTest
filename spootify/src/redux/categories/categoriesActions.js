import axios from 'axios';
import { REQUEST_CATEGORIES } from '../../api/spotify';

export const CATEGORIES = 'CATEGORIES';
const token = 'token';

export const getcategories = () => {
  return (dispatch) => {
    const access_token = window.localStorage.getItem(token);
    axios
      .get(REQUEST_CATEGORIES, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      .then((response) => {
        dispatch({
          type: CATEGORIES,
          status: true,
          categories: response.data,
          msg: ''
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({ type: CATEGORIES, status: false, msg: errorMsg });
      });
  };
};
