
import { FC } from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';
import MainResultScreen from './screens/main/MainResultScreen';
import ScreenHeader from "./components/ScreenHeader";


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
        </Routes>
      </div>
  )
  
}
export default Router;

