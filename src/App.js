import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import CardsUpper from './Components/CardsUpper';
import Sidebar from './Components/Sidebar'
import Statistics from './Components/Statistics';
import Products from './Components/Products';
function App() {
  return (
    <div className="App container-fluid">
      <div className='row container-fluid'>
        <div className='container-fluid d-none d-md-block col-md-4'>
        <Sidebar/>
        </div>
        <div className='content offset-sm-3 col-md-10 offset-md-2 p-0'>
          <Header/>
          <CardsUpper/>
          <Statistics/>
          <Products/>
        </div>
      </div>
    </div>
  );
}

export default App;
