import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { Button } from './styles/Button';

export const ErrorPage=()=>{
    return(
        <>
            <Wrapper>  
            <div className='container error-container'>
            <h2 className='error'>404 error page</h2>
            <p className='error-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non quisquam id corrupti dolor in doloremque deserunt fuga, eveniet quis.</p>
            <NavLink to='/'><Button>go back</Button></NavLink>  
            </div>          
            </Wrapper>            
        </>
    );
}
const Wrapper = styled.section`
    ${'' /* border:2px solid red; */}
    .error-container{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        gap:2rem;
        padding-block:15rem;
    }

    .error{
        font-size:5rem;
        text-transform: Capitalize;
        word-spacing:1rem;
        letter-spacing:.2rem;
    }
    .error-para{
        font-size:1.2rem;
        word-spacing:.5rem;
        letter-spacing:.1rem;
    }
`;