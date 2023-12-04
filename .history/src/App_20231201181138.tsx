import { useState } from 'react';
import './App.css';
import { supabase } from './supabase';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default App;
