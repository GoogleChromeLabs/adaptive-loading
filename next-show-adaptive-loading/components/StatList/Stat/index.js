
const Stat = ({ label, unit, value }) => (
  <>
    <div className='stat'>
      <div className='value-in-unit'>
        {value}
        <span className='unit'>{unit}</span>
      </div>
      <div className='label'>{label}</div>
    </div>
    <style jsx>{`
      .stat {
        padding: 0 8px;
      }
      .value-in-unit {
        font-size: 48px;
        font-weight: 600;
        line-height: 1;
        margin-bottom: 4px;
      }
      .unit {
        font-size: 20px;
      }
      .label {
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
      }
    `}</style>
  </>
);

export default Stat;
