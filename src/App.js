import logo from './logo.svg';
import './App.css';
import Base from './components/loginSignupPage/basePage/Base';
import HomPageBase from './components/homePage/homePageBase/HomePageBase';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* {Wrap all the route in Routes} */}
      <Routes>
        {/* Give the path name and element which render on particular path  */}
        <Route path='/' element={<HomPageBase/>}></Route>
        <Route path='/login_signup' element={<Base/>}></Route>
      </Routes>
      {/* <Base/>
      <HomPageBase/> */}
    </div>
  );
}

export default App;
