import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [count, setCount] = useState(0)
  let appState = {
    state: {
      count: count,
    },
    action: {
      incrementCount: () => setCount(count + 1)
    }
  }

  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
