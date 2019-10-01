
import React, { useEffect } from 'react';
import Link from 'next/link';

import posts from '../../data/posts';
import Layout from '../../components/layout';
import PostInfo from '../../components/PostInfo';

const SimplePost = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container post">
        <div>
          <img src={`/static/images/${props.post.id}.jpg`} />
          <div>
            <PostInfo post={props.post} />
            <p>{props.post.text}</p>
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
  let post = posts.find(post => post.id == query.index);
  return {
    post
  };
};

export default SimplePost;
