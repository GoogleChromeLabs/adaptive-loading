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

const SeasonsList = ({ seasonNumbers, currentSeasonNumber, clickHandler }) => (
  <div>
    { seasonNumbers.map(seasonNumber => {
      const activeClass = currentSeasonNumber === seasonNumber ? 'active' : '';
      
      return (
        <div
          key={seasonNumber}
          onClick={clickHandler(seasonNumber)}
          className={activeClass}>
          Season {seasonNumber}
          <style jsx>{`
            div {
              cursor: pointer;
              padding-bottom: 1px;
              margin-bottom: 10px;
              font-size: 20px;
            }
            div.active {
              border-bottom: 1px solid #fff;
              padding-bottom: 0px;
            }
          `}</style>
        </div>
      );
    }) }
  </div>
);

export default SeasonsList;
