import { useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log('data', response.data);
    console.log('error', response.error?.message);
    if (response.error) {
      alert(response.error.message);
    }
    if (response.data) {
      // redirect user to /score
      navigate('/score');
    }
  };

  return (
    <div>
      <input
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
