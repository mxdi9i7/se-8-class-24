import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const checkUser = async () => {
    const response = await supabase.auth.getUser();
    if (response.data) {
      navigate('/score');
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleSignup = async () => {
    const response = await supabase.auth.signUp({
      email,
      password,
    });
    console.log('data', response.data);
    console.log('error', response.error);
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default SignupPage;
