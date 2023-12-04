import { useEffect } from 'react';
import { supabase } from '../supabase';

function ScorePage() {
  const checkUser = async () => {
    const response = await supabase.auth.getUser();
    console.log(response);
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <h1>Score</h1>
      <button>Log out</button>
    </div>
  );
}

export default ScorePage;
