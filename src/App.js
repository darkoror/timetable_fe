import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Schedule from './components/Schedule';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
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
              <Route
                path="/universities/:universityId/departments"
                element={<Departments />}
              />
              <Route
                path="/departments/:departmentId/groups"
                element={<Groups />}
              />
              <Route path="/groups/:groupId/teachers" element={<Teachers />} />
              <Route path="/groups/:groupId/subjects" element={<Subjects />} />
              <Route path="/groups/:groupId/schedule" element={<Schedule />} />
              <Route
                path="*"
                element={<Navigate to="/universities" replace />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
