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

import { useRouter } from 'next/router';

import { ADAPTIVE_MODE } from '../../utils/constants';
import { serializeToQueryParam } from '../../utils/helpers';
import { LOCAL_DEV_MODE } from '../../config';

const LiteModeDebuggingLinks = () => {
  const router = useRouter();
  const rootPath = LOCAL_DEV_MODE ? '' : '/next-show-adaptive-loading';
  const pathname = `${rootPath}${router.pathname}`;

  return (
    <>
      <div>
        <a href={serializeToQueryParam({...router.query, mode: ADAPTIVE_MODE.LITE}, pathname)}>
          Direct link to force slow mode
        </a>
        <a href={serializeToQueryParam({...router.query, mode: ADAPTIVE_MODE.FULL}, pathname)}>
          Direct link to force normal mode
        </a>
      </div>
      <style jsx>{`
        padding: 16px 24px;
        margin: 8px 12px;
        a {
          font-size: 1.25rem;
          text-decoration: underline;
        }
        a:first-child {
          margin-right: 24px;
        }
      `}</style>
    </>
  );
};

export default LiteModeDebuggingLinks;
