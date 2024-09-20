// ApiButtons.js
import React, { useState } from 'react';

function ApiButtons() {

  const GATEWAY = "http://localhost:8888";

  const [api1Response, setApi1Response] = useState('API 1 호출');
  const [api2Response, setApi2Response] = useState('API 2 호출');

  const callApi1 = async () => {
    const response = await fetch(`${GATEWAY}/api/service1/test/`);
    const responseObject = await response.json();
    setApi1Response(responseObject.data);
  };

  const callApi2 = async () => {
    const response = await fetch(`${GATEWAY}/api/service2/test/`);
    const responseObject = await response.json();
    setApi2Response(responseObject.data);
  };

  return (
    <div>
      <button onClick={callApi1}>{api1Response}</button>
      <button onClick={callApi2}>{api2Response}</button>
    </div>
  );
}

export default ApiButtons;