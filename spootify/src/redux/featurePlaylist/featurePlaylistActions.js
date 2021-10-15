export const GET_FEATURED_PLAYLIST = 'FEATURED_PLAYLIST';

const access_token =
  'BQCxAlbaTiqqS235sYPVvLuOuRC9GJbsAg0ZiQVan16Mcs7ZFd0tc-ZCyQUNCtVolnG_HnRIm1MvO2g79iY';

export const getFeaturePlaylist = () => {
  return (dispatch) => {
    axios
      .get(api.GET_FEATURED_PLAYLIST, {
        Authorization: `token ${access_token}`
      })
      .then((response) => {
        dispatch({
          type: GET_FEATURED_PLAYLIST,
          status: true,
          featurePlaylist: response.playlists.items,
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
