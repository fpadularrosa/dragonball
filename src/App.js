import './App.css';
import Personajes from './components/Personajes';
function App() {
  return (
    <div className="App" style={{
      backgroundColor: 'gray'
    }}>
      <h1>Dragon Ball API</h1>
      <Personajes />
    </div>
  );
}

export default App;
