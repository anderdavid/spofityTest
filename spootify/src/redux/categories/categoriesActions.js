import axios from 'axios';
import { REQUEST_CATEGORIES } from '../../api/spotify';

export const CATEGORIES = 'CATEGORIES';

const access_token =
  'BQBcZro_nT0wCBaLAxeYPIj-Fcas_t8cZtiPHWqNv_qY6psgphcJbz536IuN13mFBzjvIM644Sn9ZBEfrnY';

export const getcategories = () => {
  console.log('getCategories');
  return (dispatch) => {
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
