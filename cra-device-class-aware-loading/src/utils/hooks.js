/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useState, useEffect } from 'react';
import axios from 'axios';

import { DEVICE_API_URL } from '../config';

const unsupportMessage = 'The device is not detected.';

const useDeviceParams = () => {
  const [deviceParams, setdeviceParams] = useState(null);

  useEffect(() => {
    const getDevice = async () => {
      let device;
      try {
        const response = await axios.get(`${DEVICE_API_URL}`);
        device = response.data;
        console.log('[getDevice] device => ', device);
      } catch (error) {
        console.log('[getDevice] error => ', error);
      }
  
      if (device) {
        setdeviceParams({...device});
      } else {
        setdeviceParams({unsupportMessage});
      }
    };
    
    getDevice();
  }, []);

  return deviceParams;
};

export { useDeviceParams };
