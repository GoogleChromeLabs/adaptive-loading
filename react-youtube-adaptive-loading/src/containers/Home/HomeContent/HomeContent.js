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
import { connect } from 'react-redux';

import { VideoGrid } from '../../../components/VideoGrid/VideoGrid';
import { InfiniteScroll } from '../../../components/InfiniteScroll/InfiniteScroll';
import { getMostPopularVideos, getVideosByCategory } from '../../../store/reducers/videos';
import { YOUTUBE_API_DEV_MODE } from '../../../config';
import './HomeContent.scss';

const AMOUNT_TRENDING_VIDEOS = 12;

export class HomeContent extends Component {
  getTrendingVideos = () => {
    const { mostPopularVideos } = this.props;
    return mostPopularVideos.slice(0, AMOUNT_TRENDING_VIDEOS);
  };

  getVideoGridsForCategories = () => {
    const { videosByCategory } = this.props;
    const categoryTitles = Object.keys(videosByCategory || {});
    return categoryTitles.map((categoryTitle,index) => {
      const videos = videosByCategory[categoryTitle];
      // the last video grid element should not have a divider
      const hideDivider = index === categoryTitles.length - 1;
      return <VideoGrid title={categoryTitle} videos={videos} key={categoryTitle} hideDivider={hideDivider}/>;
    });
  };

  render() {
    const { showLoader, bottomReachedCallback } = this.props;
    const trendingVideos = YOUTUBE_API_DEV_MODE ? require('../../../dummy-data/home/trending-videos.json') : this.getTrendingVideos();
    // console.log('[dummy-data/home/trending-videos.json]', JSON.stringify(trendingVideos));
    const categoryGrids = this.getVideoGridsForCategories();

    return (
      <div className='home-content'>
        <div className='responsive-video-grid-container'>
          <InfiniteScroll bottomReachedCallback={bottomReachedCallback} showLoader={showLoader}>
            <VideoGrid title='Trending' videos={trendingVideos}/>
            {categoryGrids}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    videosByCategory: getVideosByCategory(state),
    mostPopularVideos: getMostPopularVideos(state)
  };
};

export default connect(mapStateToProps, null)(HomeContent);
