import logo from './logo.svg';
import './App.css';
import UserContext from './UserContext';
import Second from './Second';

function App() {

  const user = 'Foo'

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Second />
      </UserContext.Provider>
    </div>
  );
}

export default App;
