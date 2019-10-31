
import React from 'react';
import Lottie from 'react-lottie';

import Layout from '../Layout';
import halloweenSmashdown from '../../../assets/lotties/halloween-smashdown.json';

const HeavyWithAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: halloweenSmashdown,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Layout>
      <Lottie options={defaultOptions} />
    </Layout>
  );
};

export default HeavyWithAnimation;
