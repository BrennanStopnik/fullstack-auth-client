import { useState, useEffect } from "react";
import { useAuth } from "../Hooks/Auth";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

export const HomePage = () => {

  const [message, setMessage] = useState('');
  const auth = useAuth();

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${urlEndpoint}/users/message`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken,
        },
      });
      setMessage(await response.message);
    };
    if (auth.userToken !== null) {
      fetchMessage();
    }
    if (auth.userToken === null) {
      setMessage('');
    }
  }, [auth.userToken]);

  return (
    <div>
      <h1>FS Auth Home Page</h1>
      {message && <h3>Message: {message}</h3>}
    </div>
  )
}

