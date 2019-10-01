
import Layout from '../components/layout';
import AdaptivePostList from '../pages/AdaptivePostList';

const Home = () => {
  return (
    <Layout>
      <div className='container'>
        <AdaptivePostList />
      </div>
    </Layout>
  );
};

export default Home;
