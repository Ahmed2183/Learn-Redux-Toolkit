import logo from './logo.svg';
import './App.css';
import AddData from './components/AddData';
import ListData from './components/ListData';
import Clock from './components/Clock';

function App() {
  return (
    <>
    <div className="App">
     <AddData/>
    </div>
    <div className="App">
     <ListData/>
    </div>
    <div className="App">
     <Clock/>
    </div>
    </>
  );
}

export default App;
