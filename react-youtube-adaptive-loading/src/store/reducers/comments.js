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

import { SUCCESS } from '../actions';
import { WATCH_DETAILS } from '../actions/watch';
import { COMMENT_THREAD_LIST_RESPONSE } from '../api/youtube-api-response-types';
import { createSelector } from 'reselect';
import { COMMENT_THREAD } from '../actions/comment';
import { getSearchParam } from '../../services/url';

const initialState = {
  byVideo: {},
  byId: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_THREAD[SUCCESS]:
      return reduceCommentThread(action.response, action.videoId, state);
    case WATCH_DETAILS[SUCCESS]:
      return reduceWatchDetails(action.response, action.videoId, state);
    default:
      return state;
  }
};

const reduceWatchDetails = (responses, videoId, prevState) => {
  const commentThreadResponse = responses.find(res => res.result.kind === COMMENT_THREAD_LIST_RESPONSE) || [];
  return reduceCommentThread(commentThreadResponse.result, videoId, prevState);
};

const reduceCommentThread = (response, videoId, prevState) => {
  if (!response) {
    return prevState;
  }
  const newComments = response.items.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

  // if we have already fetched some comments for a particular video
  // we just append the ids for the new comments
  const prevCommentIds = prevState.byVideo[videoId] ? prevState.byVideo[videoId].ids : [];
  const commentIds = [...prevCommentIds, ...Object.keys(newComments)];

  const byVideoComment = {
    nextPageToken: response.nextPageToken,
    ids: [...new Set(commentIds)]
  };

  return {
    ...prevState,
    byId: {
      ...prevState.byId,
      ...newComments
    },
    byVideo: {
      ...prevState.byVideo,
      [videoId]: byVideoComment
    }
  };
};

/*
* Selectors
 */
const getCommentIdsForVideo = (state, videoId) => {
  const comment = state.comments.byVideo[videoId];
  if (comment) {
    return comment.ids;
  }
  return [];
};
export const getCommentsForVideo = createSelector(
  getCommentIdsForVideo,
  state => state.comments.byId,
  (commentIds, allComments) => {
    return commentIds.map(commentId => allComments[commentId]);
  }
);

const getComment = (state, location) => {
  const videoId = getSearchParam(location, 'v');
  return state.comments.byVideo[videoId];
};
export const getCommentNextPageToken = createSelector(
  getComment,
  (comment) => {
    return comment ? comment.nextPageToken : null;
  }
);
