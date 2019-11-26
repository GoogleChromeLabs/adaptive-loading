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

import { fork, take, all, put, call } from 'redux-saga/effects';

import * as watchActions from '../actions/watch';
import {
  buildVideoDetailRequest,
  buildRelatedVideosRequest,
  buildChannelRequest,
  buildCommentThreadRequest
} from '../api/youtube-api';
import { REQUEST } from '../actions';
import { SEARCH_LIST_RESPONSE, VIDEO_LIST_RESPONSE } from '../api/youtube-api-response-types';
import { YOUTUBE_API_REQUEST_AMOUNT } from '../../config';

export function* fetchWatchDetails(videoId, channelId, liteModeEnabled) {
  const requests = !liteModeEnabled ? [
    buildVideoDetailRequest.bind(null, videoId),
    buildRelatedVideosRequest.bind(null, videoId),
    buildCommentThreadRequest.bind(null, videoId)
  ] : [
    buildVideoDetailRequest.bind(null, videoId),
    buildRelatedVideosRequest.bind(null, videoId, YOUTUBE_API_REQUEST_AMOUNT / 2)
  ];

  if (channelId) {
    requests.push(buildChannelRequest.bind(null, channelId));
  }

  try {
    const responses = yield all(requests.map(fn => call(fn)));
    yield put(watchActions.details.success(responses, videoId));
    yield call (fetchVideoDetails, responses, channelId === null);
  } catch (error) {
    yield put(watchActions.details.failure(error));
  }
};

function* fetchVideoDetails(responses, shouldFetchChannelInfo) {
  const searchListResponse = responses.find(response => response.result.kind === SEARCH_LIST_RESPONSE);
  const relatedVideoIds =  searchListResponse.result.items.map(relatedVideo => relatedVideo.id.videoId);

  const requests = relatedVideoIds.map(relatedVideoId => {
    return buildVideoDetailRequest.bind(null, relatedVideoId);
  });

  if (shouldFetchChannelInfo) {
    // we have to extract the video's channel id from the video details response
    // so we can load additional channel information.
    // this is only needed, when a user directly accesses .../watch?v=1234
    // because then we only know the video id
    const videoDetailResponse = responses.find(response => response.result.kind === VIDEO_LIST_RESPONSE);
    const videos = videoDetailResponse.result.items;
    if (videos && videos.length) {
      requests.push(buildChannelRequest.bind(null, videos[0].snippet.channelId));
    }
  }

  try {
    const responses = yield all(requests.map(fn => call(fn)));
    yield put(watchActions.videoDetails.success(responses));
  } catch (error) {
    yield put(watchActions.videoDetails.failure(error));
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* watchWatchDetails() {
  while (true) {
    const { videoId, channelId, liteModeEnabled } = yield take(watchActions.WATCH_DETAILS[REQUEST]);
    yield fork(fetchWatchDetails, videoId, channelId, liteModeEnabled);
  }
};
