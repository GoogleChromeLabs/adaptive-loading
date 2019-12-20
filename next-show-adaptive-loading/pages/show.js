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

import { useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import EpisodesForSeasons from '../components/EpisodesForSeasons';
import StatList from '../components/StatList';

import Banner from '../components/Banner';
import { useCheckLiteMode } from '../utils/hooks';
import { getTmdbAPIEndpoint, BACKDROP_SIZES, TMDB_IMAGES_BASE_URL } from '../config';
import { QUERY_PARAMS } from '../utils/constants';

const Show = ({ backdropPath, name, clientHint, seasonNumbers, stats }) => {
  const router = useRouter();
  const [currentSeasonNumber, setCurrentSeasonNumber] = useState(seasonNumbers[seasonNumbers.length - 1]);
  const isLiteMode = useCheckLiteMode(clientHint.ect, clientHint.deviceMemory);

  const setSeasonNumber = seasonNumber => {
    return () => setCurrentSeasonNumber(seasonNumber);
  };
  
  const backdropSize = isLiteMode ? BACKDROP_SIZES.W300 : BACKDROP_SIZES.W1280;

  return (
    <>
      <Banner bannerImage={backdropPath ? `${TMDB_IMAGES_BASE_URL}${backdropSize}${backdropPath}` : null}>
        <h1>{name}</h1>
        <StatList stats={stats} />
      </Banner>
      <EpisodesForSeasons
        showId={router.query[QUERY_PARAMS.ID]}
        seasonNumbers={seasonNumbers}
        setSeasonNumber={setSeasonNumber}
        currentSeasonNumber={currentSeasonNumber} />
    </>
  );
};

Show.getInitialProps = async ({ query, req }) => {
  const id = query[QUERY_PARAMS.ID];

  const response = await fetch(getTmdbAPIEndpoint(`/tv/${id}`));
  const show = await response.json();

  const clientHint = {
    deviceMemory: req ? req.headers['device-memory'] : null,
    ect: req ? req.headers['ect'] : null
  };

  const seasonNumbers = show.seasons.map(season => season.season_number);

  const stats = [
    {
      label: 'User score',
      unit: '%',
      value: show.vote_average * 10
    },
    {
      label: 'Seasons available',
      value: show.number_of_seasons
    },
    {
      label: 'Episodes available',
      value: show.number_of_episodes
    }
  ];

  return {
    backdropPath: show.backdrop_path || '',
    name: show.name,
    clientHint,
    seasonNumbers,
    stats
  };
};

export default Show;
