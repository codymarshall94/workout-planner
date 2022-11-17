import './App.css';
import Onboarding from './pages/PlanOptions/Onboarding';
import Template from './pages/Template/Template';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;
