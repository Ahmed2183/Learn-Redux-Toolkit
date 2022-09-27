import logo from './logo.svg';
import './App.css';
import AddData from './components/AddData';
import ListData from './components/ListData';
import Clock from './components/Clock';
import SearchData from './components/SearchData';

function App() {
  return (
    <>
    <div className="App">
     <AddData/>
    </div>
    <div className="App" style={{ paddingTop:50 }}>
     <SearchData/>
    </div>
    <div className="App" style={{ paddingTop:50 }}>
     <ListData/>
    </div>
    <div className="App" style={{ paddingTop:100 }}>
     <Clock/>
    </div>
    </>
  );
}

export default App;
