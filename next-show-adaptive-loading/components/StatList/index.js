
// TODO: confirm if we go with this
import Stat from './Stat';

const StatList = ({ stats }) => (
  <>
    <div>
      { stats.map(({label, unit, value}) => (
        <Stat key={label} label={label} unit={unit} value={value} />
      )) }
    </div>
    <style jsx>{`
      display: flex;
    `}</style>
  </>
);

export default StatList;
