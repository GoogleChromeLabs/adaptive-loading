
import { Fragment } from 'react';
import { useMemoryStatus } from '../../utils/hooks';

const MemoryStatus = () => {
  const memoryStatus = useMemoryStatus();
  if (!memoryStatus) return <Fragment>Loading...</Fragment>;

  const {
    totalJSHeapSize,
    usedJSHeapSize,
    jsHeapSizeLimit,
    deviceMemory,
    overLoaded,
    unsupportMessage
  } = memoryStatus;

  const memoryStatusList =  [
    {
      label: 'Total JSHeapSize',
      value: `${totalJSHeapSize} (Byte)`
    },
    {
      label: 'Used JSHeapSize',
      value: `${usedJSHeapSize} (Byte)`
    },
    {
      label: 'JSHeapSizeLimit',
      value: `${jsHeapSizeLimit} (Byte)`
    },
    {
      label: 'DeviceMemory',
      value: `${deviceMemory} (GByte)`
    },
    {
      label: 'Memory overLoaded?',
      value: overLoaded ? 'Yes' : 'No'
    }
  ];

  return (
    <div>
      { unsupportMessage ? (
        <p>{unsupportMessage}</p>
      ) : (
        <div>
          <div className="tags">
            { memoryStatusList.map(memoryStatusListItem => (
              <div key={memoryStatusListItem.label} className="tag">
                <div className='tag-value'>{memoryStatusListItem.value}</div>
                <div className='tag-label'>{memoryStatusListItem.label}</div>
              </div>
            )) }
          <style jsx>{`
            .tags {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .tag {
              width: 20%;
              min-width: 120px;
              padding: 10px;
            }
            @media (max-width: 700px) {
              .post {
                width: auto;
              }
            }
            .tag-label {
              margin-bottom: 4px;
              color: rgba(0,0,0,0.45);
              font-size: 14px;
            }
            .tag-value {
              color: rgba(0,0,0,0.85);
              font-size: 16px;
            }
          `}</style>
        </div>
      </div>
      ) }
    </div>
  );
};

export default MemoryStatus;
