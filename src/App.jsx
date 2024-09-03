import React from 'react';
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home";
import { Shop } from "./Components/Shop";
import { Watches } from './Components/Watches';
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";
import {Routes,Route} from 'react-router-dom';
import { ErrorPage } from './Components/Error';

export const App =()=>{

  const theme={
    colors:{
        main_heading: '#f0f0f0',
        white: '#fff',
        black: '#242424',
        bg: '#f9f9ff',
        darkbg: '#2e3336',
        btn: '#cc5f2d',
        contact_bg:'#f0eeeb',
        fpara:'#a5a6a8',
        icon_bg:'#7a7c7d',
        footer_bg:'#0a0a0a',
        footer_text:'#848786',
        text_hover:'#02b6c7',
        submenu_bg:'#f7f7f7',
        shadowSupport: 'rgba(0,0,0,0.16) 0px 2px 4px',
        
        helper: '#8490ff',
        darkbg_helper: '#403f3f',
        darkbg_helper2: '#ede8e6',
        bgHelper: '#4d054d',
        btn_helper: '#d1b9a5',
        shadow: 'rgba(0,0,0,0.2) 0px 1px 3px 0px, rgba(27,31,35,0.15), 0px 0px 0px 1px',
        btn_shadow: 'inset rgba(0,0,0,0.16) 0 4px 5px',
        header_shadow: '0 1px 2px 2px rgba(0,0,0,0.1)',
    },
    media:{ mobile:'768px', tab: '998px', }
}
  return(
      <>
          <ThemeProvider theme = { theme }>
          <GlobalStyle/>
              <Header/>
              <Routes>
                <Route path ='/' element ={<Home/>}/>
                <Route path ='/shop' element ={<Shop/>}/>
                <Route path='watches' element={<Watches/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='*' element={<ErrorPage/>}/>
              </Routes>
              <Footer/>
          </ThemeProvider>
      </>
  );
}
