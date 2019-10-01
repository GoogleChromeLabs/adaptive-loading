
import Link from 'next/link';
import { motion } from 'framer-motion';

import PostInfo from '../PostInfo';

const postVariants = {
  initial: {scale: 0.96, y: 30, opacity: 0},
  enter: {scale: 1, y: 0, opacity: 1, transition: {duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96]}},
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: {duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96]}
  }
};

const AnimationPostList = ({ posts }) => (
  <motion.div
    initial='initial'
    animate='enter'
    exit='exit'
    variants={{ exit: { transition: { staggerChildren: 0.1 } } }}>
    <div className='posts'>
      { posts.map(post => {
        return (
          <div key={post.id} className='post'>
            <motion.div variants={postVariants}>
              <Link scroll={false} href='/AnimationPost/[index]' as={`/animationPost/${post.id}`}>
                <a>
                  <motion.div whileHover='hover' variants={{hover: {scale: 0.96}}}>
                    <img src={`/static/images/${post.id}.jpg`} />
                  </motion.div>
                  <div>{post.title}</div>
                </a>
              </Link>
              <PostInfo post={post} />
            </motion.div>
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
  </motion.div>
);

export default AnimationPostList;
