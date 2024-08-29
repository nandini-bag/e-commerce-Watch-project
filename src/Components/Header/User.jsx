import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from "styled-components";
import { Button } from '../styles/Button';

export const User=()=>{
    return(
        <>
            <UserIcons className='userdiv'>
            <NavLink to='/signup' className='navbar-link'>
            <Button>SignUp</Button>
            </NavLink>
            </UserIcons>
        </>
    );
}
const UserIcons = styled.div`
    display:inline;
    @media(max-width:700px){
        Button{
            font-size:1.2rem;
        }
        
    }
`;