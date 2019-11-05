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

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { VideoList } from '../../components/VideoList/VideoList';
import * as videoActions from '../../store/actions/video';
import {
  allMostPopularVideosLoaded,
  getMostPopularVideos,
  getMostPopularVideosNextPageToken
} from '../../store/reducers/videos';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import { DEV_MODE } from '../../config';

class Trending extends Component {
  componentDidMount() {
    this.fetchTrendingVideos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.youtubeLibraryLoaded !== this.props.youtubeLibraryLoaded) {
      this.fetchTrendingVideos();
    }
  }

  fetchMoreVideos = () => {
    const { nextPageToken, youtubeLibraryLoaded, fetchMostPopularVideos } = this.props;

    if (youtubeLibraryLoaded && nextPageToken) {
      fetchMostPopularVideos(12, true, nextPageToken);
    }
  };

  fetchTrendingVideos = () => {
    const { youtubeLibraryLoaded, fetchMostPopularVideos } = this.props;
    if (youtubeLibraryLoaded) {
      fetchMostPopularVideos(20, true);
    }
  };

  shouldShowLoader = () => {
    const { allMostPopularVideosLoaded } = this.props;

    return !allMostPopularVideosLoaded;
  };

  render() {
    const loaderActive = this.shouldShowLoader();
    const videos = DEV_MODE ? require('../../dummy-data/trending/trending.json') : this.props.videos;

    return (
      <VideoList
        bottomReachedCallback={this.fetchMoreVideos}
        showLoader={loaderActive}
        videos={videos} />
    );
  }
}

const mapStateToProps = state => {
  return {
    videos: getMostPopularVideos(state),
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    allMostPopularVideosLoaded: allMostPopularVideosLoaded(state),
    nextPageToken: getMostPopularVideosNextPageToken(state),
  };
};

const mapDispatchToProps = dispatch => {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  return bindActionCreators({fetchMostPopularVideos}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
