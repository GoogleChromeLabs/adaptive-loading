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

const TextField = ({ type, ...rest }) => (
  <>
    <input type='text' {...rest} />
    <style jsx>{`
      font-family: inherit;
      font-size: inherit;
      width: 100%;
      height: 32px;
      padding: 0 8px;
      color: inherit;
      background-color: rgba(255, 255, 255, .25);
      border: 1px solid rgba(0, 0, 0, .25);
      border-radius: 2px;
    `}</style>
  </>
);

export default TextField;
