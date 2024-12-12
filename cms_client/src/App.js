import './App.css';
import Student from './Components/Students/Student'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Components/Body';
function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
