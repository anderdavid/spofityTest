import axios from 'axios';
import { REQUEST_CATEGORIES } from '../../api/spotify';

export const CATEGORIES = 'CATEGORIES';

const access_token =
  'BQCxAlbaTiqqS235sYPVvLuOuRC9GJbsAg0ZiQVan16Mcs7ZFd0tc-ZCyQUNCtVolnG_HnRIm1MvO2g79iY';

export const getcategories = () => {
  return (dispatch) => {
    axios
      .get(REQUEST_CATEGORIES, {
        Authorization: `token ${access_token}`
      })
      .then((response) => {
        dispatch({
          type: CATEGORIES,
          status: true,
          categories: response.categories.items,
          msg: ''
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({ type: CATEGORIES, status: false, msg: errorMsg });
      });
  };
};
