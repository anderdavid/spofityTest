import { REQUEST_GET_NEW_RELEASES } from '../../api/spotify';
import axios from 'axios';

export const GET_NEW_RELEASES = 'NEW_RELEASES';
const token = 'token';

export const getNewReleases = () => {
  const access_token = window.localStorage.getItem(token);
  return (dispatch) => {
    axios
      .get(REQUEST_GET_NEW_RELEASES, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      .then((response) => {
        dispatch({
          type: GET_NEW_RELEASES,
          status: true,
          newReleases: response.data,
          msg: ''
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({ type: GET_NEW_RELEASES, status: false, msg: errorMsg });
      });
  };
};
