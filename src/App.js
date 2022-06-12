import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    console.log(res);
  });
  return <div className="App">Test</div>;
}

export default App;
