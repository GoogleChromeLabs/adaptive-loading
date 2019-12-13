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

import React from 'react';
import Toggle from 'react-toggle'; // TODO: update -> deprecated lifecyle usage detected
import 'react-toggle/style.css';

const ToggleWithLabel = ({ label, onChange, ...rest }) => {
  const onChangeHandler = event => {
    onChange(event.target.checked);
  };

  return (
    <>
      <div className='toggle-with-label'>
        <Toggle onChange={onChangeHandler} {...rest} />
        <label>{label}</label>
      </div>
      <style jsx>{`
        .toggle-with-label {
          display: flex;
          align-items: center;
          padding: 8px;
        }
        :global(.toggle-with-label > .react-toggle) {
          margin-right: 8px;
        }
      `}</style>
    </>
  );
};

export default ToggleWithLabel;
