import { supabase } from '../supabase';

function ScorePage() {
  const checkUser = async () => {
    const response = await supabase.auth.getUser();
    console.log(response);
  };
  return (
    <div>
      <h1>Score</h1>
    </div>
  );
}

export default ScorePage;
