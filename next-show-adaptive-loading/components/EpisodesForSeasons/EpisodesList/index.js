
import CircleNumber from '../../CircleNumber';

const EpisodesList = ({ episodes }) => {
  const episodeIds = episodes ? Object.keys(episodes) : [];
  return (
    <div>
      { episodeIds.map(episodeId => {
        const { episode, title } = episodes[episodeId];

        return (
          <div key={episodeId} className='episodes-list'>
            <CircleNumber number={episode} />
            <span>&nbsp;{title}</span>
          </div>
        );
      }) }
      <style jsx>{`
        .episodes-list {
          margin-bottom: 30px;
          text-align: left;
        }
      `}</style>
    </div>
  )
};

export default EpisodesList;
