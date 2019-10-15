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

import { Fragment, useContext } from 'react';

import AnimationEmulationContext from '../AnimationEmulationContext';
import AnimationPostList from '../AnimationPostList';
import SimplePostList from '../SimplePostList';
import Nav from '../Nav';
import posts from '../../data/posts';

const AdaptivePostList = () => {
  const { animationAllowed } = useContext(AnimationEmulationContext);

  const adaptivePost = animationAllowed ? (
    <AnimationPostList posts={posts} />
  ) : (
    <SimplePostList posts={posts} />
  );

  return (
    <Fragment>
      <Nav />
      <h1 className='post-list-title'>
        {animationAllowed ? 'Next.js & Framer Motion Page' : 'Next.js & Simple Page(No Animation)'}
      </h1>
      {adaptivePost}
      <style jsx>{`
        .post-list-title {
          margin: 0;
          width: 100%;
          line-height: 1.15;
          font-size: 32px;
        }
        .post-list-title,
        .description {
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
};

export default AdaptivePostList;
