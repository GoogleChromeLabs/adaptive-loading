
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

import { renderHook, act } from '@testing-library/react-hooks';
import { useSaveData } from './';

describe('useSaveData', () => {
  test(`should return "true" for unsupported case`, () => {
    const { result } = renderHook(() => useSaveData());
    expect(result.current.unsupported).toBe(true);
  });

  test(`should return "true" for enabled save data`, () => {
    global.navigator.connection = {
      saveData: true
    };
    const { result } = renderHook(() => useSaveData());

    expect(result.current.saveData).toEqual(navigator.connection.saveData);
  });

  test(`should return "false" for disabled save data`, () => {
    global.navigator.connection = {
      saveData: false
    };
    const { result } = renderHook(() => useSaveData());

    expect(result.current.saveData).toEqual(navigator.connection.saveData);
  });
});
