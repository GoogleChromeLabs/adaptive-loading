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

// TODO: confirm if we go with this
import EpisodesList from './EpisodesList';
import SeasonsList from './SeasonsList';

const EpisodesForSeasons = ({ seasons, setSeason, currentSeason }) => (
  <>
    <div className='episodes-for-seasons'>
      <SeasonsList
        seasons={seasons}
        currentSeason={currentSeason}
        clickHandler={setSeason} />
      <EpisodesList episodes={seasons[currentSeason]} />
    </div>
    <style jsx>{`
    .episodes-for-seasons {
      display: flex;
      padding: 0 24px;
      width: 60%;
      margin: 0 auto;
    }
    .episodes-for-seasons > :global(div:first-child) {
      margin-right: 48px;
    }
    `}</style>
  </>
);

export default EpisodesForSeasons;
