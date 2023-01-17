import { createContext, useState } from 'react';
import './App.css';
import IndexRouting from './Components/IndexRouting/IndexRouting';

export const UserDetles = createContext();

function App() {
  const [users, setUsers] = useState({});
  return (
    <UserDetles.Provider value={[users, setUsers]}>
      <div className="App">
        <IndexRouting></IndexRouting>
      </div>
    </UserDetles.Provider>

  );
}

export default App;
