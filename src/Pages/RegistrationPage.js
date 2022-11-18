import { useState } from 'react';
import { useAuth } from "../Hooks/Auth"
import { useNavigate } from "react-router-dom"

export const RegistrationPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>FS Auth Registration Page</h1>
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
        {registerMessage && <h3>{registerMessage}</h3>}
        <button
          type='button'
          onClick={async () => {
            const regResult = await auth.register(email, password);
            if (regResult.success) {
              navigate('/login');
            }
            if (!regResult.success) {
              setRegisterMessage(regResult.message);
            }
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}