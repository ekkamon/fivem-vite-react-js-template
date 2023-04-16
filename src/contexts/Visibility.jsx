import { createContext, useContext, useState } from 'react';

import { useNuiEvent } from '@hooks/index';
import { debugData } from '@utils/index';

debugData([
  {
    action: 'SET_VISIBLE',
    data: {
      status: true,
    },
  },
]);

const VisibilityContext = createContext(null);

export const VisibilityProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useNuiEvent('SET_VISIBLE', ({ status }) => {
    setVisible(status);

    if (!status) {
      document.body.style.backgroundColor = 'transparent';
    }
  });

  return (
    <VisibilityContext.Provider value={{ visible, setVisible }}>
      {visible && children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => useContext(VisibilityContext);
