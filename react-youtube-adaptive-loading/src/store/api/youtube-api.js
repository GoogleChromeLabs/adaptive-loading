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

import { YOUTUBE_API_REQUEST_AMOUNT } from '../../config';

const buildVideoCategoriesRequest = () => {
  return buildApiRequest('GET',
    '/youtube/v3/videoCategories', {
      'part': 'snippet',
      'regionCode': 'US'
    },
    null
  );
};

const buildMostPopularVideosRequest = (amount = YOUTUBE_API_REQUEST_AMOUNT.MOST_POPULAR_VIDEOS, loadDescription = false, nextPageToken, videoCategoryId = null) => {
  let fields = 'nextPageToken,prevPageToken,items(contentDetails/duration,id,snippet(channelId,channelTitle,publishedAt,thumbnails/medium,title),statistics/viewCount),pageInfo(totalResults)';
  if (loadDescription) {
    fields += ',items/snippet/description';
  }
  return buildApiRequest('GET',
    '/youtube/v3/videos', {
      part: 'snippet,statistics,contentDetails',
      chart: 'mostPopular',
      maxResults: amount,
      regionCode: 'US',
      pageToken: nextPageToken,
      fields,
      videoCategoryId,
    },
    null
  );
};

const buildVideoDetailRequest = videoId => {
  return buildApiRequest('GET',
    '/youtube/v3/videos', {
      part: 'snippet,statistics,contentDetails',
      id: videoId,
      fields: 'kind,items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,thumbnails/medium,title),statistics)'
    },
    null
  );
};

const buildChannelRequest = channelId => {
  return buildApiRequest('GET',
    '/youtube/v3/channels', {
      part: 'snippet,statistics',
      id: channelId,
      fields: 'kind,items(id,snippet(description,thumbnails/medium,title),statistics/subscriberCount)'
    },
    null
  );
};

const buildCommentThreadRequest = (videoId, nextPageToken) => {
  return buildApiRequest('GET',
    '/youtube/v3/commentThreads', {
      part: 'id,snippet',
      pageToken: nextPageToken,
      videoId
    },
    null
  );
};

const buildSearchRequest = (query, nextPageToken, amount = YOUTUBE_API_REQUEST_AMOUNT.SEARCH) => {
  return buildApiRequest('GET',
    '/youtube/v3/search', {
      part: 'id,snippet',
      q: query,
      type: 'video',
      pageToken: nextPageToken,
      maxResults: amount
    },
    null
  );
};

const buildRelatedVideosRequest = (videoId, amount = YOUTUBE_API_REQUEST_AMOUNT.RELATED_VIDEOS) => {
  return buildApiRequest('GET',
    '/youtube/v3/search', {
      part: 'snippet',
      type: 'video',
      maxResults: amount,
      relatedToVideoId: videoId
    },
    null
  );
};

/*
  Util - Youtube API boilerplate code
  */
const buildApiRequest = (requestMethod, path, params, properties) => {
  params = removeEmptyParams(params);
  let request;
  if (properties) {
    let resource = createResource(properties);
    request = window.gapi.client.request({
      'body': resource,
      'method': requestMethod,
      'path': path,
      'params': params
    });
  } else {
    request = window.gapi.client.request({
      'method': requestMethod,
      'path': path,
      'params': params
    });
  }
  return request;
};

const removeEmptyParams = params => {
  for (const param in params) {
    if (!params[param] || params[param] === 'undefined') {
      delete params[param];
    }
  }
  return params;
};

const createResource = properties => {
  let resource = {};
  let normalizedProps = properties;
  for (const property in properties) {
    const value = properties[property];
    if (property && property.substr(-2, 2) === '[]') {
      const adjustedName = property.replace('[]', '');
      if (value) {
        normalizedProps[adjustedName] = value.split(',');
      }
      delete normalizedProps[property];
    }
  }
  for (const prop in normalizedProps) {
    // Leave properties that don't have values out of inserted resource.
    if (normalizedProps.hasOwnProperty(prop) && normalizedProps[prop]) {
      let propArray = prop.split('.');
      let ref = resource;
      for (let pa = 0; pa < propArray.length; pa++) {
        const key = propArray[pa];
        if (pa === propArray.length - 1) {
          ref[key] = normalizedProps[prop];
        } else {
          ref = ref[key] = ref[key] || {};
        }
      }
    }
  }
  return resource;
};

export {
  buildVideoCategoriesRequest,
  buildMostPopularVideosRequest,
  buildVideoDetailRequest,
  buildChannelRequest,
  buildCommentThreadRequest,
  buildSearchRequest,
  buildRelatedVideosRequest,
  buildApiRequest
};
