
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home';
import Experience from '../pages/experience';
import Education from '../pages/education';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};

export default Routing;