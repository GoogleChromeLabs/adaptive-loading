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
import { connect } from 'react-redux';

import Video from '../../../components/Video/Video';
import { VideoMetadata } from '../../../components/VideoMetadata/VideoMetadata';
import { VideoInfoBox } from '../../../components/VideoInfoBox/VideoInfoBox';
import { Comments } from '../../Comments/Comments';
import { RelatedVideos } from '../../../components/RelatedVideos/RelatedVideos';
import { InfiniteScroll } from '../../../components/InfiniteScroll/InfiniteScroll';
import { getAmountComments, getRelatedVideos, getVideoById } from '../../../store/reducers/videos';
import { getChannel } from '../../../store/reducers/channels';
import { getCommentsForVideo } from '../../../store/reducers/comments';
import './WatchContent.scss';
import { YOUTUBE_API_DEV_MODE, YOUTUBE_API_REQUEST_AMOUNT } from '../../../config';

const WatchContent = ({
  nextPageToken,
  videoId,
  video,
  channel,
  relatedVideos,
  comments,
  amountComments,
  bottomReachedCallback,
  liteModeEnabled
}) => {
  const shouldShowLoader = () => {
    return !!nextPageToken;
  };

  if (YOUTUBE_API_DEV_MODE) {
    video = require('../../../dummy-data/watch/video.json');
    videoId = video.id;
    channel = require('../../../dummy-data/watch/channel.json');
    const dummyRelatedVideos = require('../../../dummy-data/watch/related-videos.json');
    relatedVideos = !liteModeEnabled ? dummyRelatedVideos : dummyRelatedVideos.slice(0, YOUTUBE_API_REQUEST_AMOUNT.RELATED_VIDEOS / 2);
    comments = !liteModeEnabled ? require('../../../dummy-data/watch/comments.json') : [];
    amountComments = 93283;
  }
  // console.log('[dummy-data/watch/video.json]', JSON.stringify(video));
  // console.log('[dummy-data/watch/channel.json]', JSON.stringify(channel));
  // console.log('[dummy-data/watch/related-videos.json]', JSON.stringify(relatedVideos));
  // console.log('[dummy-data/watch/comments.json]', JSON.stringify(comments), amountComments);

  if (!videoId) {
    return <div />
  }

  return (
    <InfiniteScroll bottomReachedCallback={bottomReachedCallback} showLoader={shouldShowLoader()}>
      <div className='watch-grid'>
        <Video className='video' id={videoId} />
        <VideoMetadata className='metadata' video={video} />
        <VideoInfoBox className='video-info-box' video={video} channel={channel} />
        <RelatedVideos className='related-videos' videos={relatedVideos} />
        <Comments className='comments' comments={comments} amountComments={amountComments} />
      </div>
    </InfiniteScroll>
  );
};

const mapStateToProps = (state, props) => {
  return {
    relatedVideos: getRelatedVideos(state, props.videoId),
    video: getVideoById(state, props.videoId),
    channel: getChannel(state, props.channelId),
    comments: getCommentsForVideo(state, props.videoId),
    amountComments: getAmountComments(state, props.videoId)
  };
};

export default connect(mapStateToProps, null)(WatchContent);
