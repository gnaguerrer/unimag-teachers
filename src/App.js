import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Home } from "./views/home/Home";
import { TeacherDetails } from "./views/teacher/TeacherDetails";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teacher:id" element={<TeacherDetails />} />
      </Routes>
    </div>
  );
}

export default App;
