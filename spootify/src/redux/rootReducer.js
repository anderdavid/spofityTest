import { combineReducers } from 'redux';

import categoriesReducers from './categories/categoriesReducers';
import newReleasesReducers from './newReleases/newReleasesReducers';
import featurePlaylistReducers from './featurePlaylist/featurePlaylistReducers';

const rootReducer = combineReducers({
  categories: categoriesReducers,
  newReleases: newReleasesReducers,
  featurePlaylist: featurePlaylistReducers
});

export default rootReducer;
