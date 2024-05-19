import logo from "./logo.svg";
import "./App.css";
import Widgets from "./components/Widgets";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
