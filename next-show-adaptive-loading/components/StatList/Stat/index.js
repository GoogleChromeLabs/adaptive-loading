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

const Stat = ({ label, unit, value }) => (
  <>
    <div className='stat'>
      <div className='value-in-unit'>
        {value}
        <span className='unit'>{unit}</span>
      </div>
      <div className='label'>{label}</div>
    </div>
    <style jsx>{`
      .stat {
        padding: 0 8px;
      }
      .value-in-unit {
        font-size: 48px;
        font-weight: 600;
        line-height: 1;
        margin-bottom: 4px;
      }
      .unit {
        font-size: 20px;
      }
      .label {
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
      }
    `}</style>
  </>
);

export default Stat;
