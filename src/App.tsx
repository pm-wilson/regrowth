import './App.css';
import Page from './screens/home';
import {
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </div>
  );
}
