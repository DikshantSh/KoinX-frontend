import "./App.css";
import Crypto from "./components/Crypto/Crypto";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Crypto />
    </div>
  );
}

export default App;
