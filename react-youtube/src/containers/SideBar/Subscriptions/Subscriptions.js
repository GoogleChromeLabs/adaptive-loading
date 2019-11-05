import React from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Divider} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title='Subscriptions'/>
        <Subscription label='PewDiePie' broadcasting/>
        <Subscription label='Joe Robinet' amountNewVideos={10}/>
        <Subscription label='Venture 4wd' amountNewVideos={23}/>
        <Subscription label='Man City' amountNewVideos={4}/>
        <Subscription label='MarleyThirteen' amountNewVideos={114}/>
        <Divider/>
      </React.Fragment>
    );
  }
}
