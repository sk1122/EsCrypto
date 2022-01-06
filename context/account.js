import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [account, setAccount] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  let sharedState = {
	  account,
    setAccount,
	  isAuthenticated,
    setIsAuthenticated
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAccountContext() {
  return useContext(AppContext);
}
