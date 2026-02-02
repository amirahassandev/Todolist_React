import logo from './logo.svg';
import './App.css';
import Todolist from './todolist';
import './style.css'

function App() {
  return (
    <div className="App" style={{backgroundColor: "#19161f", height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center"}}>
      <Todolist />
    </div>
  );
}

export default App;
