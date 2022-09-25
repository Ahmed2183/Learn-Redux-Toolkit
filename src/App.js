import logo from './logo.svg';
import './App.css';
import AddData from './components/AddData';
import ListData from './components/ListData';

function App() {
  return (
    <>
    <div className="App">
     <AddData/>
    </div>
    <div className="App">
     <ListData/>
    </div>
    </>
  );
}

export default App;
