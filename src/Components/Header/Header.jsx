import React from 'react';
import { Navbar } from './Navbar';
import { Theme } from './Theme';
import { Menu } from './Menu';
import { Cart } from './Cart';
import { User } from './User';
import { IoWatch } from "react-icons/io5";
import { styled } from "styled-components";
import { useGlobalContext } from '../Context';

export const Header=()=>{
    const {headerRef, placeholderRef,isSticky} = useGlobalContext();
    
    return(
        <>
            <MainHeader className='mainheader' ref={placeholderRef} >
            <div ref={headerRef} className={` ${isSticky ? 'header sticky' : 'header'}`}>
                <div className='logo'>
                    <h1 className='logoName'><IoWatch className='icon'/> Store</h1>
                </div>
                <Navbar/>
                <div className='icons'>
                    <User/>
                    <Cart/>
                    <Theme/>
                    <Menu/>
                </div>
            </div>
            </MainHeader>
        </>
    );
}
const MainHeader = styled.div`
    
    .header{
        display: flex;
        justify-content:space-between;
        align-item:center;
        padding:0 10rem;
        line-height: 6rem;
        position:relative;
    }
    .sticky{
    position: fixed;
    width:100%;
    left:0;
    top: 0;
    z-index:999;
    box-shadow:${({theme})=> theme.colors.header_shadow};
}
    .logoName{
        display: flex;
        justify-content:center;
        align-items:center;
        gap:.5rem;
        line-height:6.5rem;
    }
    @media(max-width:${({ theme })=>theme.media.tab}){
        .logo{
            margin-right:10rem;
        }
    }
    @media(max-width:700px){
        .header{
            padding:0 5rem;
        }
    }

`;