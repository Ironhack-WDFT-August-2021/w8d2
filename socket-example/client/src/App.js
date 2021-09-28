import './App.css';
import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:5000');

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', payload => {
      setMessage(payload.message);
    })
  }, [])

  const onChange = e => {
    setMessage(e.target.value);
    // send a message to the server 
    socket.emit('new-message', {
      message: e.target.value
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={message} onChange={onChange} />
      </header>
    </div>
  );
}

export default App;
