import React from 'react';
import Navbar from "./Navbar/Navbar";
import './App.css';
import Player from './Player/Player';
import MainContent from './MainContent/MainContent';
import { useEffect, useState } from 'react';
import { requestAuthorization } from "./api/auth";
import AuthContextProvider from './Navbar/context/auth-context';

function App() {
  const [authToken, setAuthToken] = useState();
  const [query, setQuery] = useState("");

  useEffect(() => {
    requestAuthorization().then((response) => {
      setAuthToken(response.data.access_token);
    });
  }, []);

  if (!authToken) {
    return <div>Loading...</div>;
  }
  return (
    <AuthContextProvider authToken={authToken}>
      <div className="App">
        <Navbar query={query} setQuery={setQuery} />
        <MainContent query={query} authToken={authToken} />
        <Player />
      </div>
    </AuthContextProvider>
  );
}

export default App;
