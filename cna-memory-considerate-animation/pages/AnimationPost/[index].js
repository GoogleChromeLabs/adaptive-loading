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

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import posts from '../../data/posts';
import Layout from '../../components/layout';
import PostInfo from '../../components/PostInfo';

const easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing
    }
  }
};

const AnimationPost = ({ post }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container post">
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.img variants={imageVariants} src={`/static/images/${post.id}.jpg`} />
          <motion.div variants={textVariants}>
            <PostInfo post={post} />
            <p>{post.text}</p>
          </motion.div>
          <motion.div variants={backVariants}>
            <Link href="/">
              <a>Back to list</a>
            </Link>
          </motion.div>
        </motion.div>
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

AnimationPost.getInitialProps = ({ query }) => {
  const post = posts.find(post => post.id === parseInt(query.index));
  return {post};
};

export default AnimationPost;
