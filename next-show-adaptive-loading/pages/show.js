

// TODO: confirm if we go with this
// import { useState } from 'react';
// import StatList from '../components/StatList';
// import EpisodesForSeasons from '../components/EpisodesForSeasons';

import Banner from '../components/Banner';
import { useCheckLiteMode } from '../utils/hooks';
import { getTmdbAPIEndpoint, BACKDROP_SIZES, TMDB_IMAGES_BASE_URL } from '../config';
import { QUERY_PARAMS } from '../utils/constants';

// TODO: confirm if we go with this
// const createEpisodeInSeason = (seasons, episode) => {
//   return {...(seasons[episode.season] || {}), [episode.episode]: episode};
// };

const Show = ({ backdropPath, name, clientHint }) => {
  // TODO: confirm if we go with this
  // const [currentSeason, setCurrentSeason] = useState(Object.keys(seasons).slice().pop());
  // const setSeason = season => {
  //   return () => setCurrentSeason(season);
  // };
  const isLiteMode = useCheckLiteMode(clientHint.ect, clientHint.deviceMemory);
  const backdropSize = isLiteMode ? BACKDROP_SIZES.W300 : BACKDROP_SIZES.W1280;

  return (
    <>
      <Banner bannerImage={backdropPath ? `${TMDB_IMAGES_BASE_URL}${backdropSize}${backdropPath}` : null}>
        <h1>{name}</h1>
        {/* TODO: confirm if we go with this */}
        {/* <StatList stats={stats} /> */}
      </Banner>
      {/* TODO: confirm if we go with this */}
      {/* <EpisodesForSeasons
        seasons={seasons}
        setSeason={setSeason}
        currentSeason={currentSeason} /> */}
    </>
  );
};

Show.getInitialProps = async ({ query, req }) => {
  const id = query[QUERY_PARAMS.ID];

  const response = await fetch(getTmdbAPIEndpoint(`/tv/${id}`));
  const show = await response.json();

  const clientHint = {
    deviceMemory: req ? req.headers['device-memory'] : null,
    ect: req ? req.headers['ect'] : null
  };

  return {
    backdropPath: show.backdrop_path || '',
    name: show.name,
    clientHint
  };


  // TODO: confirm if we go with this
  // const seasons = show.episodes.reduce((seasons, episode) => {
  //   seasons[episode.season] = createEpisodeInSeason(seasons, episode);
  //   return seasons;
  // }, {});
  // const stats = [
  //   {
  //     label: 'Rating',
  //     unit: 'stars',
  //     value: (show.rating.percentage / 100 * 5).toFixed(1)
  //   },
  //   {
  //     label: 'Seasons available',
  //     value: show.num_seasons
  //   },
  //   {
  //     label: 'Episodes available',
  //     value: show.episodes.length
  //   }
  // ];
  // return {show, seasons, stats};
};

export default Show;
