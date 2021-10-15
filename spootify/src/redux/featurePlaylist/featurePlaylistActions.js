import axios from 'axios';
import { REQUEST_GET_FEATURED_PLAYLIST } from '../../api/spotify';

export const GET_FEATURED_PLAYLIST = 'FEATURED_PLAYLIST';

const access_token =
  'BQBcZro_nT0wCBaLAxeYPIj-Fcas_t8cZtiPHWqNv_qY6psgphcJbz536IuN13mFBzjvIM644Sn9ZBEfrnY';

export const getFeaturePlaylist = () => {
  return (dispatch) => {
    axios
      .get(REQUEST_GET_FEATURED_PLAYLIST, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      .then((response) => {
        dispatch({
          type: GET_FEATURED_PLAYLIST,
          status: true,
          featurePlaylist: response.data,
          msg: ''
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: GET_FEATURED_PLAYLIST,
          status: false,
          msg: errorMsg
        });
      });
  };
};
