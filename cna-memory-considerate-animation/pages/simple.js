import Layout from '../components/layout';

import posts from '../data/posts';
import SimplePostList from '../components/SimplePostList';

const Simple = () => {
  return (
    <Layout>
      <div className='container'>
        <h1 className='title'>Turn off animation</h1>
        <SimplePostList posts={posts} />
      </div>
    </Layout>
  );
};

export default Simple;