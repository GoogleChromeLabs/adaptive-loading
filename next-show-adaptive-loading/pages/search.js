
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import SearchForm from '../components/SearchForm';
import ThumbnailGrid from '../components/ThumbnailGrid';
import Navigation from '../components/Navigation';
import CreditSource from '../components/CreditSource';
import { useCheckLiteMode } from '../utils/hooks';
import { serializeToQueryParam } from '../utils/helpers';
import {
  TMDB_API_SEARCH_TV_SHOWS,
  TMDB_IMAGES_BASE_URL,
  POSTER_SIZES
} from '../config';
import { QUERY_PARAMS, PAGES } from '../utils/constants';

const Search = ({ shows, clientHint }) => {
  const router = useRouter();
  const isLiteMode = useCheckLiteMode(clientHint.ect, clientHint.deviceMemory);

  const query = router.query[QUERY_PARAMS.QUERY];
  const page = router.query[QUERY_PARAMS.PAGE];
  const posterSize = isLiteMode ? POSTER_SIZES.W92 : POSTER_SIZES.W780;
  const thumbnailGridItems = shows.map(show => ({
    id: show.id,
    thumbnail: show.poster_path ? `${TMDB_IMAGES_BASE_URL}${posterSize}${show.poster_path}` : null
  }));

  return (
    <>
      <SearchForm shows={shows} />
      <ThumbnailGrid thumbnailGridItems={thumbnailGridItems} />
      <Navigation url={serializeToQueryParam({[QUERY_PARAMS.QUERY]: query, [QUERY_PARAMS.PAGE]: ''}, PAGES.SEARCH)} page={parseInt(page)} />
      <CreditSource />
    </>
  );
};

Search.getInitialProps = async ({ query, req }) => {
  const searchQuery = query[QUERY_PARAMS.QUERY];
  const page = query[QUERY_PARAMS.PAGE];
  const clientHint = {
    deviceMemory: req ? req.headers['device-memory'] : null,
    ect: req ? req.headers['ect'] : null
  };

  if (!searchQuery) {
    return {shows: [], clientHint};
  }
  const response = await fetch(`${TMDB_API_SEARCH_TV_SHOWS}&${serializeToQueryParam({[QUERY_PARAMS.QUERY]: searchQuery, [QUERY_PARAMS.PAGE]: page})}`);
  const { results: shows } = await response.json();
  
  return {shows, clientHint};
};

export default Search;
