/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component, Fragment } from 'react';

import './battery-ui.css'

class BatteryUI extends Component {
  state = {
    chargingTime: null,
    chargingState: null,
    dischargeTime: null,
    level: null,
    unsupportMessage: null
  };

  componentDidMount() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(this.monitorBattery);
    } else {
      this.setState({unsupportMessage: 'The Battery Status API is not supported on this platform.'});
    }
  }

  monitorBattery = battery => {
    // Update the initial UI
    this.updateBatteryUI(battery);
  
    // Monitor for futher updates
    battery.addEventListener('levelchange', this.updateBatteryUI.bind(null, battery));
    battery.addEventListener('chargingchange', this.updateBatteryUI.bind(null, battery));
    battery.addEventListener('dischargingtimechange', this.updateBatteryUI.bind(null, battery));
    battery.addEventListener('chargingtimechange', this.updateBatteryUI.bind(null, battery));
  };

  updateBatteryUI = battery => {
    this.setState({
      chargingTime: `${battery.chargingTime} Seconds`,
      dischargeTime: `${battery.dischargingTime} Seconds`,
      level: `${battery.level * 100}%`,
      chargingState: battery.charging === true ? 'Charging' : 'Discharging'
    });
  };

  render () {
    const { chargingTime, chargingState, dischargeTime, level, unsupportMessage } = this.state;
    return (
      <div className='list'>
        { unsupportMessage ? (
          <div>{unsupportMessage}</div>
        ) : (
          <Fragment>
            <div className='list-item'>
              <div>Charging:</div>
              <div>{chargingState}</div>
            </div>
            <div className='list-item'>
              <div>Time to charge:</div>
              <div>{chargingTime}</div>
            </div>
            <div className='list-item'>
              <div>Time to discharge:</div>
              <div>{dischargeTime}</div>
            </div>
            <div className='list-item'>
              <div>Battery Level:</div>
              <div>{level}</div>
            </div>
          </Fragment>
        ) }
      </div>
    );
  }
}

export default BatteryUI;
