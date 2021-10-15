import api from '../../api/spotify';

export const GET_NEW_RELEASES = 'NEW_RELEASES';

const access_token =
  'BQCxAlbaTiqqS235sYPVvLuOuRC9GJbsAg0ZiQVan16Mcs7ZFd0tc-ZCyQUNCtVolnG_HnRIm1MvO2g79iY';

export const getNewReleases = () => {
  return (dispatch) => {
    axios
      .get(api.GET_NEW_RELEASES, {
        Authorization: `token ${access_token}`
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
