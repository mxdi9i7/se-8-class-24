import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  return (
    <div>
      <input
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input type='password' />
      <button>Signup</button>
    </div>
  );
}

export default App;
