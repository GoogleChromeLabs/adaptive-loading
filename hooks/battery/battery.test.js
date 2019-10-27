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

import 'babel-polyfill';
import { renderHook, act } from '@testing-library/react-hooks';

import { useBatteryStatus } from './';
import { BATTERY } from '../constants';

// ray test touch <
const getBatteryStatus = currentResult => ({
  chargingTime: currentResult.chargingTime,
  dischargingTime: currentResult.dischargingTime,
  level: currentResult.level,
  charging: currentResult.charging
});
// ray test touch >

describe('useBatteryStatus', () => {
  test(`should return ${BATTERY.UNSUPPORT_MESSAGE}`, () => {
    const { result } = renderHook(() => useBatteryStatus());
  
    // ray test touch <
    expect(result.current.unsupportMessage).toBe(BATTERY.UNSUPPORT_MESSAGE);
    // ray test touch >
  });
  
  test('should update the batteryStatus state', () => {
    const { result } = renderHook(() => useBatteryStatus());

    // ray test touch <
    const mockBatteryStatus = {
      chargingTime: 20,
      dischargingTime: 40,
      level: 50,
      charging: true
    };
    // ray test touch >
  
    // ray test touch <
    act(() => result.current.updateBatteryStatus(mockBatteryStatus));
    // ray test touch >
  
    // ray test touch <
    expect(getBatteryStatus(result.current)).toEqual(mockBatteryStatus);
    // ray test touch >
  });
  
  test('should return mockGetBattery status', async () => {
    const originalError = console.error;
    console.error = jest.fn();

    // ray test touch <
    const mockBatteryStatus = {
      chargingTime: 20,
      dischargingTime: 40,
      level: 50,
      charging: true
    };
    // ray test touch >
  
    // ray test touch <
    const mockGetBattery = jest.fn().mockImplementation(() => Promise.resolve({
      ...mockBatteryStatus,
      addEventListener: jest.fn()
    }));
    // ray test touch >
    global.navigator.getBattery = mockGetBattery;
  
    try {
      const { result, waitForNextUpdate } = renderHook(() => useBatteryStatus());
      await waitForNextUpdate();
      
      // ray test touch <
      expect(getBatteryStatus(result.current)).toEqual(mockBatteryStatus);
      // ray test touch >
    } finally {
      console.error = originalError;
    }
  });
  
  test('should update the batteryStatus state when battery level change event', async () => {
    const originalError = console.error;
    console.error = jest.fn();

    // ray test touch <
    const mockBatteryStatus = {
      chargingTime: 20,
      dischargingTime: 40,
      level: 50,
      charging: true
    };

    const mockBattery = {
      ...mockBatteryStatus,
      addEventListener: jest.fn()
    };
    
    const mockGetBattery = jest.fn().mockImplementation(() => Promise.resolve(mockBattery));
    // ray test touch >
    global.navigator.getBattery = mockGetBattery;

    try {
      const { result, waitForNextUpdate } = renderHook(() => useBatteryStatus());
      await waitForNextUpdate();

      // ray test touch <
      // batteryStatus is updated because updateBatteryStatus should be called internally
      expect(getBatteryStatus(result.current)).toEqual(mockBatteryStatus);

      const map = {};
      const mockUpdatedBatteryStatus = {
        chargingTime: 30,
        dischargingTime: 50,
        level: 60,
        charging: false
      };
      const mockUpdatedBattery = {
        ...mockUpdatedBatteryStatus,
        addEventListener: jest.fn().mockImplementation((event, callback) => {
          map[event] = callback;
        })
      };
      // ray test touch >

      act(() => {
        // the argument `battery` seems persisted with the initial argument value even when battery level change event triggered with new argument value due to Javascript scope or something
        result.current.monitorBattery(mockUpdatedBattery); // for the purpose of updated battery argument value
        // TODO: should make sure the argument is used to update the state
        map.levelchange(mockUpdatedBattery); // even if we comment out this line, test is passed successfully
      });

      // ray test touch <
      expect(getBatteryStatus(result.current)).toEqual(mockUpdatedBatteryStatus);
      // ray test touch >
    } finally {
      console.error = originalError;
    }
  });
});
