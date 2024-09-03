import React from 'react';
import { Navbar } from './Navbar';
import { Theme } from './Theme';
import { Menu } from './Menu';
import { Cart } from './Cart';
import { User } from './User';
import { styled } from "styled-components";
import { useGlobalContext } from '../Context';
import { Logo } from './Logo';

export const Header=()=>{
    const {headerRef, placeholderRef,isSticky} = useGlobalContext();
    
    return(
        <>
            <MainHeader className='mainheader' ref={placeholderRef} >
            <div ref={headerRef} className={` ${isSticky ? 'header sticky' : 'header'}`}>
                <Logo/>
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
        display:grid;
        grid-template-columns:repeat(7,1fr);
        grid-gap:2rem;
        position:relative;
    }
    .logo{
        grid-column:2;
    }
    .navbar{
        grid-column:4;
    }
    .icons{
        grid-column:6;
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
    @media(max-width:558px){
        .logo{
        grid-column:3;
    }
        .icons{
        grid-column:5;
    }
    }

`;