/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import SearchForm from '../components/SearchForm';
import ThumbnailGrid from '../components/ThumbnailGrid';
import Pagination from '../components/Pagination';
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
      <Pagination url={serializeToQueryParam({[QUERY_PARAMS.QUERY]: query, [QUERY_PARAMS.PAGE]: ''}, PAGES.SEARCH)} page={parseInt(page)} />
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
