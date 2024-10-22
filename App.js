
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Login.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './components/Sidebar';
import { createContext, useState } from 'react';
import Login from './pages/Login';


const MyContext = createContext();

function App() {

  const [isToggleSidebar, setisToggleSidebar] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [isHideSidebarandHeader, setisHideSidebarandHeader] = useState(false);

  const values = {
    isToggleSidebar,
    setisToggleSidebar,
    isLogin,
    setisLogin,
    isHideSidebarandHeader,
    setisHideSidebarandHeader
  }
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHideSidebarandHeader !== true && <Header /> 
        }
        
        <div className='main d-flex'>
          {
            isHideSidebarandHeader !== true &&
            <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
              <Sidebar />
            </div>
          }


          <div className={`content ${isHideSidebarandHeader===true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path='/' exact={true} element={<Dashboard />} />
              <Route path='/dashboard' exact={true} element={<Dashboard />} />
              <Route path='/login' exact={true} element={<Login />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App;
export { MyContext };