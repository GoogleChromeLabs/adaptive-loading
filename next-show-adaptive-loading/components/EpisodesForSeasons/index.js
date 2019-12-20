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

import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

import EpisodesList from './EpisodesList';
import SeasonsList from './SeasonsList';
import { getTmdbAPIEndpoint } from '../../config';

const EpisodesForSeasons = ({ showId, seasonNumbers, setSeasonNumber, currentSeasonNumber }) => {
  const [episodes, setEpisods] = useState([]);
  const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(false);
  useEffect(() => {
    setIsLoadingEpisodes(true);
    fetch(getTmdbAPIEndpoint(`/tv/${showId}/season/${currentSeasonNumber}`))
      .then(response => response.json())
      .then(season => {
        const episodes = season.episodes.map(episode => ({name: episode.name, number: episode.episode_number}));
        setEpisods(episodes);
        setIsLoadingEpisodes(false);
      })
  }, [currentSeasonNumber]);

  return (
    <>
      <div className='episodes-for-seasons'>
        <SeasonsList
          seasonNumbers={seasonNumbers}
          currentSeasonNumber={currentSeasonNumber}
          clickHandler={setSeasonNumber} />
        <EpisodesList loading={isLoadingEpisodes} episodes={episodes} />
      </div>
      <style jsx>{`
        .episodes-for-seasons {
          display: flex;
          padding: 0 24px;
          justify-content: center;
        }
        .episodes-for-seasons > :global(div:first-child) {
          margin-right: 48px;
        }
      `}</style>
    </>
  );
};

export default EpisodesForSeasons;
