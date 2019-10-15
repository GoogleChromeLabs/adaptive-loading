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

import Link from 'next/link';

import PostInfo from '../PostInfo';

const SimplePostList = ({ posts }) => (
  <div className='posts'>
    { posts.map(post => {
      return (
        <div key={post.id} className='post'>
          <Link scroll={false} href='/SimplePost/[index]' as={`/simplePost/${post.id}`}>
            <a>
              <div>
                <img src={`/static/images/${post.id}.jpg`} />
              </div>
              <div>{post.title}</div>
            </a>
          </Link>
          <PostInfo post={post} />
        </div>
      );
    }) }
    <style jsx>{`
      .posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .post {
        width: 50%;
        min-width: 340px;
        padding: 20px;
      }
      @media (max-width: 700px) {
        .post {
          width: auto;
        }
      }
    `}</style>
  </div>
);

export default SimplePostList;
