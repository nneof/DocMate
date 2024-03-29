import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import MenuContainer from "./components/MenuContainer";

function App() {
  return (
      <div className="App">
          <MenuContainer/>
          <Routes>
              <Route path="/doc/mate/about" element={<About />} />
              <Route path="/doc/mate/news" element={<News />} />

              <Route path="/doc/mate/home" element={<Home />} />
              <Route path="*" element={<Navigate replace to="/doc/mate/home" />} />
          </Routes>
      </div>
  );
}

export default App;
