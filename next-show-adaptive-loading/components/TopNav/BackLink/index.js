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
import { useRouter } from 'next/router'

import { AppContext } from '../../../contexts';

const BackLink = () => {
  const { theme } = useContext(AppContext);
  const router = useRouter();
  const backHandler = event => {
    event.preventDefault();
    router.back();
  };

  return (
    <>
      <a href='#' onClick={backHandler}>
        <h3>Back</h3>
      </a>
      <style jsx>{`
        a {
          color: ${theme.palette.text.primary};
          text-decoration: none;
        }
        h3 {
          margin: 12px 0;
        }
      `}</style>
    </>
  );
};

export default BackLink;
