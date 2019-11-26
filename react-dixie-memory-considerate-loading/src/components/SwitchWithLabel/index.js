/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import Toggle from 'react-toggle'; // TODO: update -> deprecated lifecyle usage detected
import 'react-toggle/style.css';

import './switch-with-label.css';

const SwitchWithLabel = ({ label, ...rest }) => (
  <div className='switch-with-label'>
    <Toggle {...rest}/>
    <label>
      {label}
    </label>
  </div>
);

export default SwitchWithLabel;
