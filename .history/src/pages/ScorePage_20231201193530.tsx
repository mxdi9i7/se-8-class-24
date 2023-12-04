import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

function ScorePage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [score, setScore] = useState(0);

  const checkUser = async () => {
    const response = await supabase.auth.getUser();
    console.log(response);
    if (response.data.user) {
      setUserId(response.data.user.id);
    }
    if (response.error) {
      navigate('/login');
    }
  };

  const handleLogout = async () => {
    const response = await supabase.auth.signOut();
    if (!response.error) {
      navigate('/login');
    }
  };

  const handleGetProfile = async () => {
    const response = await supabase
      .from('profile')
      .select('*')
      .eq('user_id', userId)
      .single();
    if (response.data) {
      setScore(response.data.score);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (userId) {
      handleGetProfile();
    }
  }, [userId]);

  return (
    <div>
      <h1>Score</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default ScorePage;
