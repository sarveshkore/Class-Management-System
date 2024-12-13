import './App.css';
import Header from './Components/Main/Header';
import Body from './Components/Main/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;


// import './App.css';
// import Header from './Components/Main/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Outlet } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* Render child routes */}
//       <Outlet />
//     </div>
//   );
// }

// export default App;
