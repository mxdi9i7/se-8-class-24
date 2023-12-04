import { useState } from 'react';
import { supabase } from '../supabase';
import '../App.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (response.error) {
      alert(response.error?.error_description);
      return;
    }
    console.log('data', response.data);
    console.log('error', response.error.error_description);
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
