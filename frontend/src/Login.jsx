// Login.js
import React, { useState } from 'react';
import './Login.css'; // 추가된 CSS 파일 import

function Login({ onLogin, isLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const token = localStorage.getItem('token');
    if (token) {
      onLogin(false); // 로그아웃 처리
      localStorage.removeItem('token');
    } else {
      onLogin(true);
      localStorage.setItem('token', 'fake-token'); // 임시 토큰 설정
    }
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="아이디" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <input 
              type="password" 
              placeholder="비밀번호" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
        </>
      ) : null}
      <button onClick={handleLogin} className="login-button">
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
    </div>
  );
}

export default Login;