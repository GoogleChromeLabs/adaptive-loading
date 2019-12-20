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

import { useContext } from 'react';

import { AppContext } from '../../contexts';

const CircleNumber = ({ number }) => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <span>{number}</span>
      <style jsx>{`
        display: inline-block;
        width: 30px;
        height: 30px;
        padding: 5px;
        margin-right: 10px;
        border-radius: 50%;
        color: ${theme.palette.text.secondary};
        background-color: ${theme.palette.background.paper};
        text-align: center;
      `}</style>
    </>
  );
};

export default CircleNumber;
