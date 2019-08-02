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

// TODO: addEventListener change trigger mocking

describe('useBatteryStatus', () => {
  const unsupportMessage = require('./').unsupportMessage; 
  test(`should return ${unsupportMessage}`, () => {
    const { result } = renderHook(() => useBatteryStatus());
  
    expect(result.current.batteryStatus.unsupportMessage).toBe(unsupportMessage);
  });
  
  test('should update the batteryStatus state', () => {
    const { result } = renderHook(() => useBatteryStatus());
  
    act(() => result.current.updateBatteryStatus({
      chargingTime: 20,
      dischargingTime: 40,
      charging: true,
      level: 50
    }));
  
    expect(result.current.batteryStatus).toEqual({
      chargingTime: '20 Seconds',
      dichargeTime: '40 Seconds',
      level: 50,
      chargingState: 'Charging'
    });
  });
  
  test('should return mockBattery status', async () => {
    const originalError = console.error
    console.error = jest.fn()
  
    const mockBattery = jest.fn().mockImplementation(() => Promise.resolve({
      chargingTime: 20,
      dischargingTime: 40,
      level: 50,
      charging: true,
      addEventListener: jest.fn()
    }));
  
    global.navigator.getBattery = mockBattery;
  
    try {
      const { result, waitForNextUpdate } = renderHook(() => useBatteryStatus());
    
      await waitForNextUpdate();
      
      expect(result.current.batteryStatus).toEqual({
        chargingTime: '20 Seconds',
        dichargeTime: '40 Seconds',
        level: 50,
        chargingState: 'Charging'
      });
    } finally {
      console.error = originalError;
    }
  });
});
