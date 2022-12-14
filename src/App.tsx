import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  const code = `const MyButton() => <button>I'm a button</button>;

export const MyApp() => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`;
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <SyntaxHighlighter language='typescript' style={oneDark}>
          {code}
        </SyntaxHighlighter>
      </header>
    </div>
  );
}

export default App;
