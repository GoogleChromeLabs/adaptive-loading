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

import React, { useEffect } from 'react';
import Link from 'next/link';

import posts from '../../data/posts';
import Layout from '../../components/layout';
import PostInfo from '../../components/PostInfo';

const SimplePost = ({ post }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container post">
        <div>
          <img src={`/static/images/${post.id}.jpg`} />
          <div>
            <PostInfo post={post} />
            <p>{post.text}</p>
          </div>
          <div>
            <Link href="/">
              <a>Back to list</a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .post {
            margin: 20px;
          }
          .post p {
            margin: 40px 0;
          }
        `}</style>
      </div>
    </Layout>
  );
};

SimplePost.getInitialProps = ({ query }) => {
  let post = posts.find(post => post.id === parseInt(query.index));
  return {post};
};

export default SimplePost;
