import { CATEGORIES } from './categoriesActions';

const initialState = {
  status: false,
  categories: [],
  msg: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        status: action.status,
        categories: action.categories,
        msg: action.msg
      };
    default:
      return state;
  }
};

export default reducer;
