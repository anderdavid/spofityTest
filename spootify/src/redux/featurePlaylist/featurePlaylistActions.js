import axios from 'axios';
import { REQUEST_GET_FEATURED_PLAYLIST } from '../../api/spotify';

export const GET_FEATURED_PLAYLIST = 'FEATURED_PLAYLIST';
const token = 'token';

export const getFeaturePlaylist = () => {
  return (dispatch) => {
    const access_token = window.localStorage.getItem(token);
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
