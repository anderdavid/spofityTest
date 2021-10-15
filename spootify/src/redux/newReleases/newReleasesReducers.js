import { GET_NEW_RELEASES } from './newReleasesActions';

const initialState = {
  status: false,
  newReleases: [],
  msg: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_RELEASES:
      return {
        ...state,
        status: action.status,
        newReleases: action.cursos,
        msg: action.msg
      };
    default:
      return state;
  }
};

export default reducer;
