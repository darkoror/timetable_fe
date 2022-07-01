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
          <div className="container">
            <Schedule />
            <Routes>
              <Route path="/" element={<div></div>} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
