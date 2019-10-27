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

import { useState, useEffect } from 'react';

import { BATTERY } from '../constants';

const useBatteryStatus = () => {
  const [batteryStatus, setBatteryStatus] = useState(null);

  const monitorBattery = battery => {
    // Update the initial UI
    updateBatteryStatus(battery);
  
    // Monitor for futher updates
    battery.addEventListener('levelchange', updateBatteryStatus.bind(null, battery));
    battery.addEventListener('chargingchange', updateBatteryStatus.bind(null, battery));
    battery.addEventListener('dischargingtimechange', updateBatteryStatus.bind(null, battery));
    battery.addEventListener('chargingtimechange', updateBatteryStatus.bind(null, battery));
  };

  const updateBatteryStatus = battery => {
    setBatteryStatus({
      // ray test touch <
      // chargingTime: `${battery.chargingTime} Seconds`,
      // dischargingTime: `${battery.dischargingTime} Seconds`,
      // level: battery.level,
      // chargingState: battery.charging === true ? 'Charging' : 'Discharging'
      chargingTime: battery.chargingTime,
      dischargingTime: battery.dischargingTime,
      level: battery.level,
      charging: battery.charging
      // ray test touch >
    });
  };

  useEffect(() => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then(monitorBattery);
    } else {
      setBatteryStatus({unsupportMessage: BATTERY.UNSUPPORT_MESSAGE});
    }
  // eslint-disable-next-line
  }, []);

  // ray test touch <
  return { ...batteryStatus, updateBatteryStatus, monitorBattery };
  // ray test touch >
};

export { useBatteryStatus };
