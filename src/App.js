import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    const users = [
      { name: "Tanaka", age: 26 },
      { name: "Suzuki", age: 32 },
      { name: "Yamada", age: 43 }
    ];
    const userList = users.map((user, index) =>
      <li key={index}>{user.name} (Age: {user.age})</li>
    );
    return (
      <ul>{userList}</ul>
    );
  }
}

export default App;
