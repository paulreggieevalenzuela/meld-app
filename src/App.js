import React, { useContext, useEffect } from 'react';

// Components
import Nav from './components/Nav';
import Login from './components/Login';
import Devices from './components/Devices';

// Context
import AppContext from './context';

// Utility
import { getToken } from './utils/session';
function App() {
  const token = getToken();
  const [contextData, setContext] = useContext(AppContext);
  const { isAuthenticated } = contextData;

  useEffect(() => {
    if (token) {
      setContext({
        ...contextData,
        isAuthenticated: true,
      })
    }
  }, [])

  return (
    <main className="app">
      {!isAuthenticated && ( <Login /> )}
      {isAuthenticated && ( <Nav /> )}
      {isAuthenticated && ( <Devices /> )}
    </main>
  );
}

export default App;
