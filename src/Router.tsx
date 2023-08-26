
import { FC } from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';
import MainResultScreen from './screens/main/MainResultScreen';
import ScreenHeader from "./components/ScreenHeader";
import HomeContainer from 'screens/HomeScreen';


const Router : FC = () => {
  const location = useLocation(); 
  const { pathname } = location;
  return (
    <div>
      <ScreenHeader pathname={pathname} />
      <Routes>
        <Route
            path="/"
            element={<MainResultScreen />
            }
          />
        <Route path="/home" Component={HomeContainer}></Route>
        </Routes>
        
      </div>
  )
  
}
export default Router;

