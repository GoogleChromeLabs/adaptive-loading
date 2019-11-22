
// TODO: side drawer hidden for now
// import { useState } from 'react';

import AppBar from './AppBar';
// TODO: side drawer hidden for now
// import SideDrawer from './SideDrawer';

const Navigation = () => {
  // TODO: side drawer hidden for now
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const openDrawerHandler = () => {
  //   setIsDrawerOpen(true);
  // };
  // const closeDrawerHandler = () => {
  //   setIsDrawerOpen(false);
  // };

  return (
    <>
      {/* TODO: side drawer hidden for now */}
      <AppBar /*openDrawer={openDrawerHandler}*/ />
      {/* <SideDrawer isOpened={isDrawerOpen} onClose={closeDrawerHandler} /> */}
    </>
  );
};

export default Navigation;
