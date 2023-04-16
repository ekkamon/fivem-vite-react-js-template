import { useEffect, useRef } from 'react';

export const useNuiEvent = (actionName, handler) => {
  const saveHandler = useRef(null);

  useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (e) => {
      const { action, data } = e.data;

      if (!saveHandler.current) return;

      if (action == actionName) {
        saveHandler.current(data);
      }
    };

    window.addEventListener('message', listener);
    return () => window.removeEventListener('message', listener);
  }, [actionName]);
};
