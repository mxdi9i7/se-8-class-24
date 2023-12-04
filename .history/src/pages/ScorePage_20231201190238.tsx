import { useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

function ScorePage() {
  const navigate = useNavigate();
  const checkUser = async () => {
    const response = await supabase.auth.getUser();
    console.log(response);
    if (response.error) {
      navigate('/login');
    }
  };

  const handleKickout = async () => {};

  const handleLogout = async () => {
    const response = await supabase.auth.signOut();
    if (!response.error) {
      navigate('/login');
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <h1>Score</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default ScorePage;
