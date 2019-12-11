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

// Configuration for TMDB
// To see the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

const TMDB_API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335'; // TODO: replace API_KEY, it's from react-movie-network-aware-loading
const TMDB_API_VERSION = 3;
const POPULAR_TV_SHOWS = '/tv/popular';
const SEARCH_TV_SHOWS = '/search/tv';
const TMDB_LANGUAGE = 'en-US';

const getTmdbAPIEndpoint = (tmdbCategory, apiKey=TMDB_API_KEY, language=TMDB_LANGUAGE) => {
  const endpoint = `${TMDB_API_BASE_URL}${TMDB_API_VERSION}${tmdbCategory}?api_key=${apiKey}&language=${language}`;
  return endpoint;
};

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/';
const TMDB_API_POPULAR_TV_SHOWS = getTmdbAPIEndpoint(POPULAR_TV_SHOWS);
const TMDB_API_SEARCH_TV_SHOWS = getTmdbAPIEndpoint(SEARCH_TV_SHOWS);

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZES = {
  W92: 'w92',
  W154: 'w154',
  W185: 'w185',
  W342: 'w342',
  W500: 'w500',
  W780: 'w780',
  ORIGINAL: 'original'
};

// w300, w780, w1280, original
const BACKDROP_SIZES = {
  W300: 'w300',
  W780: 'w780',
  W1280: 'w1280',
  ORIGINAL: 'original'
};

const TMDB_IMAGES_BASE_URL ='https://image.tmdb.org/t/p/';

const ADAPTIVE_FACTORS = {
  ECT_LIMIT: '4g',
  DEVICE_MEMORY_LIMIT: 4,
  DEFAULT_ECT: '4g',
  DEFAULT_DEVICE_MEMORY: 8
};

const checkLiteMode = (ect, deviceMemory) => {
  console.log('[config checkLiteMode] ect, deviceMemory => ', ect, deviceMemory);
  return (ect !== ADAPTIVE_FACTORS.ECT_LIMIT || deviceMemory < ADAPTIVE_FACTORS.DEVICE_MEMORY_LIMIT);
};

export {
  TMDB_API_POPULAR_TV_SHOWS,
  TMDB_API_SEARCH_TV_SHOWS,
  TMDB_IMAGES_BASE_URL,
  POSTER_SIZES,
  BACKDROP_SIZES,
  ADAPTIVE_FACTORS,
  getTmdbAPIEndpoint,
  checkLiteMode
};
