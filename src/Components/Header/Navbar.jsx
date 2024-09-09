import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from "styled-components";
import { useGlobalContext } from '../Context';
import { User } from './User';

export const Navbar=()=>{
    const { responsiveMenu } = useGlobalContext();
    return(
        <>
            <Nav className={`navbar ${responsiveMenu  ? 'active' : 'close-icon'}`} >
                <ul className='nav-list'>
                    <li className="navbar-parent-list">
                        <NavLink to='/' className='navbar-link'>Home</NavLink></li>
                    <li className="navbar-parent-list">
                        <NavLink to='/shop' className='navbar-link'>Shop</NavLink>
                    </li>
                    <li className="navbar-parent-list">
                        <NavLink to='/watches' className='navbar-link'>Watches</NavLink>
                    </li>
                    <li className="navbar-parent-list"><NavLink to='/contact' className='navbar-link'>Contact</NavLink></li>                   
                    <li className="navbar-parent-list"><NavLink to='/*'><User/></NavLink></li>                   
                                     
                </ul>
            </Nav>
        </>
    );
}
const Nav = styled.nav`
    .nav-list{
        display: flex;
        justify-content:center;
        align-items:center;
        gap:4rem;
    }
    .navbar-parent-list{
        line-height:5rem;
    }
    .navbar-link{
        position: relative;
    }
    .navbar-link:link, .navbar-link:visited{
        display:block;
        text-transform: capitalize;
        font-size: 1.5rem;
        font-weight:600;
        transition: all 0.3s linear; 
        color: ${({theme})=> theme.colors.black};
    }
    .navbar-link::after{
        content:'';
        position:absolute;
        background:#02b6c7;
        width: 0;
        height:.2rem;
        top:4rem;
        bottom:0;
        left:0;
        transition:width .2s;
    }
    .navbar-link:hover::after{
        width:100%;
    }
`;