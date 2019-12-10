
import { useContext } from 'react';

import CheckboxWithLabel from './CheckboxWithLabel';
import ToggleWithLabel from './ToggleWithLabel';
import { EmulationContext } from '../../contexts';

const LiteModeDebugging = () => {
  const {
    manualEnabled,
    isLiteModeOn,
    toggleLiteModeHandler,
    enableManualTestingHandler
  } = useContext(EmulationContext);

  return (
    <>
      <div>
        <ToggleWithLabel
          label='Poor Network/Memory On/Off'
          disabled={!manualEnabled}
          checked={isLiteModeOn}
          onChange={toggleLiteModeHandler} />
        <CheckboxWithLabel
          label='Enable Manual Testing'
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
