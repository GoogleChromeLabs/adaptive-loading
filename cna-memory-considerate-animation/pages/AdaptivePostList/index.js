
import { Suspense, Fragment, useContext } from 'react';

import AnimationEmulationContext from '../../components/AnimationEmulationContext';
import AnimationPostList from '../../components/AnimationPostList';
import SimplePostList from '../../components/SimplePostList';
import Nav from '../../components/Nav';
import posts from '../../data/posts';

const Loading = () => <Fragment>Loading...</Fragment>;

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
      <Suspense fallback={<Loading />}>
        {adaptivePost}
      </Suspense>
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
