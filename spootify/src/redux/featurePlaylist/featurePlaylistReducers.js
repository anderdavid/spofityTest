import { GET_FEATURED_PLAYLIST } from './featurePlaylistActions';

const initialState = {
  status: false,
  featurePlaylist: [],
  msg: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURED_PLAYLIST:
      return {
        ...state,
        status: action.status,
        featurePlaylist: action.cursos,
        msg: action.msg
      };
  }
};

export default reducer;
