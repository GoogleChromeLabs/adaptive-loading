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

import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { EmulationContext } from '../../contexts';
import WatchContent from './WatchContent/WatchContent';
import * as watchActions from '../../store/actions/watch';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import { getChannelId } from '../../store/reducers/videos';
import { getCommentNextPageToken } from '../../store/reducers/comments';
import * as commentActions from '../../store/actions/comment';
import { getSearchParam } from '../../services/url';

const Watch = ({
  youtubeLibraryLoaded,
  location,
  history,
  fetchWatchDetails,
  channelId,
  nextPageToken,
  fetchCommentThread
}) => {
  const { liteModeEnabled } = useContext(EmulationContext);

  useEffect(() => {
    if (youtubeLibraryLoaded) {
      fetchWatchContent();
    }
  // eslint-disable-next-line
  }, [liteModeEnabled]);

  useEffect(() => {
    fetchWatchContent();
  // eslint-disable-next-line
  }, [youtubeLibraryLoaded]);

  const getVideoId = () => {
    return getSearchParam(location, 'v');
  };

  const fetchWatchContent = () => {
    const videoId = getVideoId();
    if (!videoId) {
      history.push('/');
    }
    fetchWatchDetails(videoId, channelId, liteModeEnabled);
  };

  const fetchMoreComments = () => {
    if (nextPageToken && !liteModeEnabled) {
      fetchCommentThread(getVideoId(), nextPageToken);
    }
  };

  const videoId = getVideoId();

  return (
    <WatchContent
      liteModeEnabled={liteModeEnabled}
      videoId={videoId}
      channelId={channelId}
      bottomReachedCallback={fetchMoreComments}
      nextPageToken={nextPageToken} />
  );
};

const mapStateToProps = (state, props) => {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    channelId: getChannelId(state, props.location, 'v'),
    nextPageToken: getCommentNextPageToken(state, props.location),
  };
};

const mapDispatchToProps = dispatch => {
  const fetchWatchDetails = watchActions.details.request;
  const fetchCommentThread = commentActions.thread.request;
  return bindActionCreators({fetchWatchDetails, fetchCommentThread}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
