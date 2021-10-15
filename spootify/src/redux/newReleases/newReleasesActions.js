import { REQUEST_GET_NEW_RELEASES } from '../../api/spotify';
import axios from 'axios';

export const GET_NEW_RELEASES = 'NEW_RELEASES';

const access_token =
  'BQCxAlbaTiqqS235sYPVvLuOuRC9GJbsAg0ZiQVan16Mcs7ZFd0tc-ZCyQUNCtVolnG_HnRIm1MvO2g79iY';

export const getNewReleases = () => {
  return (dispatch) => {
    axios
      .get(REQUEST_GET_NEW_RELEASES, {
        Authorization: `bearer ${access_token}`
      })
      .then((response) => {
        dispatch({
          type: GET_NEW_RELEASES,
          status: true,
          newReleases: response.albums.items,
          msg: ''
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({ type: GET_NEW_RELEASES, status: false, msg: errorMsg });
      });
  };
};
