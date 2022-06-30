import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Schedule from './components/Schedule';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teachers from './components/Teachers';
import Subjects from './components/Subjects';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Schedule />
          <Routes>
            <Route path="/" element={<div></div>} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
