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

const PostInfo = ({ post }) => (
  <div className='post-info'>
    <div className='author'>
      <img width={35} height={35} className='avatar' src={`/static/avatars/${post.author.avatar}`} />{' '}
      <strong>{post.author.name}</strong> ({post.author.age})
    </div>
    <time>{post.date}</time>
    <style jsx>{`
      .post-info {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #999;
        margin: 10px 0;
      }
      .author {
        color: #555;
      }
      .avatar {
        float: left;
        width: 25px;
        height: 25px;
        margin: 0 10px 10px 0;
        border-radius: 50%;
      }
    `}</style>
  </div>
);

export default PostInfo;
