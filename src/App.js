import './App.css';
import Onboarding from './pages/PlanOptions/Onboarding';
import Template from './pages/Template/Template';
import Week from './pages/Week/Week';
import { Routes, Route } from 'react-router-dom';
import Workout from './pages/Workout/Workout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/week" element={<Week />} />
        <Route path='/template' element={<Template />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
