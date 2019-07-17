
import { useState, useEffect } from 'react';

const unsupportMessage = 'The Battery Status API is not supported on this platform.';

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
      chargingTime: `${battery.chargingTime} Seconds`,
      dichargeTime: `${battery.dischargingTime} Seconds`,
      level: battery.level,
      chargingState: battery.charging === true ? 'Charging' : 'Discharging'
    });
  };

  useEffect(() => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then(monitorBattery);
    } else {
      setBatteryStatus({unsupportMessage});
    }
  // eslint-disable-next-line
  }, []);

  return batteryStatus;
};

export { useBatteryStatus };
