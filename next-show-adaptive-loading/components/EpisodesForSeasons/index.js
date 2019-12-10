
// TODO: confirm if we go with this
import EpisodesList from './EpisodesList';
import SeasonsList from './SeasonsList';

const EpisodesForSeasons = ({ seasons, setSeason, currentSeason }) => (
  <>
    <div className='episodes-for-seasons'>
      <SeasonsList
        seasons={seasons}
        currentSeason={currentSeason}
        clickHandler={setSeason} />
      <EpisodesList episodes={seasons[currentSeason]} />
    </div>
    <style jsx>{`
    .episodes-for-seasons {
      display: flex;
      padding: 0 24px;
      width: 60%;
      margin: 0 auto;
    }
    .episodes-for-seasons > :global(div:first-child) {
      margin-right: 48px;
    }
    `}</style>
  </>
);

export default EpisodesForSeasons;
