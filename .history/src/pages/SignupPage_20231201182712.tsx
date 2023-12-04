import { useState } from 'react';
import { supabase } from '../supabase';
import '../App.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const response = await supabase.auth.signUp({
      email,
      password,
    });
    console.log('data', response.data);
    console.log('error', response.error);
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default SignupPage;
