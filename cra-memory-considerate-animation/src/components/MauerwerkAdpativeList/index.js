
import React, { useState } from 'react';
import { Grid } from 'mauerwerk';
import 'antd/dist/antd.css';
import lodash from 'lodash';

import data from './data';
import Header from './Header';
import Cell from './Cell';
import './mauerwerk-adpative-list.css';

const MauerwerkAdpativeList = () => {
  const [listData, setListData] = useState(data);
  const [columns, setColumns] = useState(2);
  const [margin, setMargin] = useState(70);
  const [filter, setFilter] = useState('');
  const [height, setHeight] = useState(true);
  const [manualAnimationTest, setManualAnimationTest] = useState(false);
  const [animation, setAnimation] = useState(true);

  const searchHandler = event => setFilter(event.target.value);
  const shuffleHandler = () => setListData(lodash.shuffle(listData));
  const changeColumnsHandler = event => setColumns(parseInt(event.key));
  const changeMarginHandler = event => setMargin(parseInt(event.key));
  const changeHeightHandler = event => setHeight(event);
  const setManualAnimationTestHandler = event => {
    setManualAnimationTest(event.target.checked);
  };

  const switchAnimationHandler = checked => {
    setAnimation(checked);
  };

  const filteredListData = listData.filter(
    listItem => listItem.name.toLowerCase().includes(filter)
  );

  return (
    <div className='main'>
      <Header
        manualAnimationTest={manualAnimationTest}
        setManualAnimationTest={setManualAnimationTestHandler}
        switchAnimation={switchAnimationHandler}
        columns={columns}
        margin={margin}
        search={searchHandler}
        shuffle={shuffleHandler}
        setColumns={changeColumnsHandler}
        setMargin={changeMarginHandler}
        setHeight={changeHeightHandler} />
      <Grid
        className='grid'
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={filteredListData}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={item => item.name}
        // Can be a fixed value or an individual data accessor
        heights={height ? item => item.height : 200}
        // Number of columns
        columns={columns}
        // Space between elements
        margin={margin}
        // Removes the possibility to scroll away from a maximized element
        lockScroll={false}
        // Delay when active elements (blown up) are minimized again
        closeDelay={400}>
        { (data, maximized, toggle) => (
          <Cell
            manualAnimationTest={manualAnimationTest}
            animation={animation}
            {...data}
            maximized={maximized}
            toggle={toggle} />
        ) }
      </Grid>
    </div>
  );
};

export default MauerwerkAdpativeList;
