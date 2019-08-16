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

import { renderHook } from '@testing-library/react-hooks';
import { useDeviceClass } from './';

describe('useDeviceClass', () => {
  test('should return light for Nexus 6', () => {
    navigator.__defineGetter__('userAgent', () => {
      return 'Mozilla/5.0 (Linux; Android 5.0; Nexus 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36' // customized user agent
    });

    const { result } = renderHook(() => useDeviceClass());
    
    expect(result.current).toEqual('light');
  });

  test('should return heavy for Galaxy 10', () => {
    navigator.__defineGetter__('userAgent', () => {
      return 'Mozilla/5.0 (Linux; Android 9; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36' // customized user agent
    });

    const { result } = renderHook(() => useDeviceClass());
    
    expect(result.current).toEqual('heavy');
  });
});
