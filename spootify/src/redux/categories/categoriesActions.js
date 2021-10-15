export const CATEGORIES = 'CATEGORIES';

export const getcategories = () => {
  return (dispatch) => {
    axios
      .get(api.CATEGORIES, {
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
