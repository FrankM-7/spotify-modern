import React from 'react';
import Navbar from "./Navbar/Navbar";
import './App.css';
import Player from './Player/Player';
import MainContent from './MainContent/MainContent';
import { useEffect, useState } from 'react';
import { requestAuthorization } from "./api/auth";
import AuthContextProvider from './Navbar/context/auth-context';

function App() {
  const [authToken, setAuthToken] = useState({});
  const [query, setQuery] = useState("");

  // backend
  const [token, setToken] = useState('');
  useEffect(() => {
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  useEffect(() => {
    requestAuthorization().then((response) => {
      setAuthToken(response.data);
    });
  }, []);

  const handleLogin = () => {
    // window.location.href = '/auth/login';
    window.location.href = 'http://localhost:5000/auth/login';  // Use direct redirection to the backend endpoint
  };

  if (!authToken) {
    return <div>Loading...</div>;
  }
  return (
    <AuthContextProvider authToken={authToken.access_token}>
      <div className="App">
        <Navbar query={query} setQuery={setQuery} />
        <MainContent query={query} authToken={authToken} />
        { (token === '') ? <button onClick={handleLogin}>Login with Spotify</button> : <Player token={token} /> }
      </div>
    </AuthContextProvider>
  );
}

export default App;
