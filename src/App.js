import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';
import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Switch from './config/Routes'


function App() {
  return (
     <BrowserRouter>

       


         <Route  render={props => (
           <>
             <Header {...props} />
             <Switch />
             <Footer />
           </>
         )} />

      


     </BrowserRouter>
   
  );
}



export default App;


