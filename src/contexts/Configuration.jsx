import { createContext, useContext, useState } from 'react';

import { debugData } from '@utils/index';
import { useNuiEvent } from '@hooks/index';

debugData([
  {
    action: 'SYNC_CONFIGURATION',
    data: {},
  },
]);

const ConfigurationContext = createContext(null);

export const ConfigurationProvider = ({ children }) => {
  const [payload, setPayload] = useState({
    maps: [],
  });

  useNuiEvent('SYNC_CONFIGURATION', (data) => setPayload(data));

  return (
    <ConfigurationContext.Provider value={payload}>
      {children}
    </ConfigurationContext.Provider>
  );
};

export const useConfiguration = () => useContext(ConfigurationContext);
