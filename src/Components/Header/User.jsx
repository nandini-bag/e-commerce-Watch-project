import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from "styled-components";
import { Button } from '../styles/Button';

export const User=()=>{
    return(
        <>
            <UserIcons className='userdiv'>
            <NavLink to='/signup'>
            <Button>SignUp</Button>
            </NavLink>
            </UserIcons>
        </>
    );
}
const UserIcons = styled.div`
    display:inline;
    @media(max-width:558px){
        Button{
            font-size:1rem;
            padding: 1rem;
        }        
    }
`;