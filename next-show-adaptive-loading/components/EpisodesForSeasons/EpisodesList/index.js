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

import CircleNumber from '../../CircleNumber';

const EpisodesList = ({ loading, episodes }) => (
  <div>
    { !loading ? episodes.map(episode => {
      const { name, number } = episode;

      return (
        <div key={number} className='episodes-list'>
          <CircleNumber number={number} />
          <span>{name}</span>
        </div>
      );
    }) : (
      <>Loading...</>
    ) }
    <style jsx>{`
      .episodes-list {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        text-align: left;
      }
    `}</style>
  </div>
);

export default EpisodesList;
