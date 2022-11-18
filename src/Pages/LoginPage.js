import { useState } from 'react';
import { useAuth } from "../Hooks/Auth"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>FS Auth Login Page</h1>
      <br/>
      <div>
        <label htmlFor="email">Email:</label>
        <br/>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <br/>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        {loginMessage && <h3>{loginMessage}</h3>}
        <button
          type='button'
          onClick={async () => {
            const logResult = await auth.login(email, password);
            if (logResult.success) {
              navigate('/');
            }
            if (!logResult.success) {
              setLoginMessage(logResult.message);
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  )
}