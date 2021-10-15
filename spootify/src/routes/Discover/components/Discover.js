import React, { useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/_discover.scss';
import {
  getcategories,
  getFeaturePlaylist,
  getNewReleases
} from '../../../redux';

export default function Discover() {
  const newReleases = useSelector((state) => state.newReleases.newReleases);
  const mCategories = useSelector((state) => state.categories.categories);
  const featurePlaylist = useSelector(
    (state) => state.featurePlaylist.featurePlaylist
  );
  const dispatch = useDispatch();

  let { albums } = newReleases || {};
  let { playlists } = featurePlaylist;
  let { categories } = mCategories;

  useEffect(() => {
    dispatch(getcategories());
    dispatch(getFeaturePlaylist());
    dispatch(getNewReleases());
  }, []);

  return (
    <div>
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={albums?.items || []}
        />

        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists?.items || []}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories?.items || []}
          imagesKey="icons"
        />
      </div>
    </div>
  );
}
