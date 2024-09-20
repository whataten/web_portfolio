// App.js
import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import ApiButtons from './ApiButtons';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="App">x
      <header className="App-header">
        <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        <ApiButtons />
      </header>
    </div>
  );
}

export default App;