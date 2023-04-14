import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import News from "./pages/News";

function App() {
  return (
      <div className="App">
          {/*<NavigationBar />*/}
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
