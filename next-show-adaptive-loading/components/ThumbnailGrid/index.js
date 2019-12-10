
import ThumbnailGridItem from './ThumbnailGridItem';

const ThumbnailGrid = ({ thumbnailGridItems }) => (
  <>
    <div>
      { thumbnailGridItems.map(thumbnailGridItem => (
        <ThumbnailGridItem key={thumbnailGridItem.id} id={thumbnailGridItem.id} thumbnail={thumbnailGridItem.thumbnail} />
      )) }
    </div>
    <style jsx>{`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 8px;
    `}</style>
  </>
);

export default ThumbnailGrid;
