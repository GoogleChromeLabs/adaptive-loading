
import React, { Component, Fragment } from 'react';

import './battery-ui.css'

class BatteryUI extends Component {
  state = {
    chargingTime: null,
    chargingState: null,
    dichargeTime: null,
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
      dichargeTime: `${battery.dischargingTime} Seconds`,
      level: `${battery.level * 100}%`,
      chargingState: battery.charging === true ? 'Charging' : 'Discharging'
    });
  };

  render () {
    const { chargingTime, chargingState, dichargeTime, level, unsupportMessage } = this.state;
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
              <div>{dichargeTime}</div>
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
