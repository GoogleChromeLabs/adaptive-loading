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

import { createAction, createRequestTypes, FAILURE, REQUEST, SUCCESS } from './index';

export const WATCH_DETAILS = createRequestTypes('WATCH_DETAILS');
export const details = {
  request: (videoId, channelId, liteModeEnabled) => createAction(WATCH_DETAILS[REQUEST], {videoId, channelId, liteModeEnabled}),
  success: (response, videoId) => createAction(WATCH_DETAILS[SUCCESS], {response, videoId}),
  failure: response => createAction(WATCH_DETAILS[FAILURE], {response})
};

export const VIDEO_DETAILS = createRequestTypes('VIDEO_DETAILS');
export const videoDetails = {
  request: () => {
    throw Error('not implemented');
  },
  success: response => createAction(VIDEO_DETAILS[SUCCESS], {response}),
  failure: response => createAction(VIDEO_DETAILS[FAILURE], {response})
};
