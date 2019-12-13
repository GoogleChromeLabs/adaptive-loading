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

import { useContext, useEffect, useState } from 'react';

import CheckboxWithLabel from './CheckboxWithLabel';
import ToggleWithLabel from './ToggleWithLabel';
import { AppContext } from '../../contexts';
import { checkIsSmallViewport } from '../../utils/helpers';

const LiteModeDebugging = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  useEffect(() => {
    setIsSmallViewport(checkIsSmallViewport());
  }, []);

  const {
    manualEnabled,
    isLiteModeOn,
    toggleLiteModeHandler,
    enableManualTestingHandler
  } = useContext(AppContext);

  return (
    <>
      <div>
        <ToggleWithLabel
          label={isSmallViewport ? 'Poor' : 'Poor Network/Memory On/Off'}
          disabled={!manualEnabled}
          checked={isLiteModeOn}
          onChange={toggleLiteModeHandler} />
        <CheckboxWithLabel
          label={isSmallViewport ? 'Testing' : 'Enable Manual Testing'}
          checked={manualEnabled}
          onChange={enableManualTestingHandler} />
      </div>
      <style jsx>{`
        display: flex;
      `}</style>
    </>
  );
};

export default LiteModeDebugging;
