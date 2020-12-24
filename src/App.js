import './App.css';
import ImageGenerator from "./components/imageGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tensor Flow
        </h1>
        <h3>
          Image recognition with cocoSsd
        </h3>
        <ImageGenerator/>
      </header>
    </div>
  );
}

export default App;
