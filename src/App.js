import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Schedule from './components/Schedule';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teachers from './components/Teachers';
import Subjects from './components/Subjects';
import Universities from './components/Universities';
import Departments from './components/Departments';
import Groups from './components/Groups';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <div className="container">
            <Routes>
              <Route path="/universities" element={<Universities />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/" element={<Schedule />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
