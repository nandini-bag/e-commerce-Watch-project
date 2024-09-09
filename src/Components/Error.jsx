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
    .error-container{ 
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        text-align:center;
        gap:2rem;
        padding:10rem ;
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
        margin-block:2rem;
    }
${'' /* ======== responsive code start ========= */}

@media(max-width:${({ theme })=>theme.media.tab}){
    .error{
        font-size:4rem;
    }
    .error-para{
        font-size:1.2rem;
    }
}
@media(max-width:${({ theme })=>theme.media.mobile}){
    .error-container{
        padding:8rem;
    }
    .error{
        font-size:3rem;
    }
    .error-para{
        font-size:1rem;
    }
}
@media(max-width:425px){
    .error-container{
        padding:3rem;
    }
    .error{
        font-size:2.5rem;
    }
    .error-para{
        font-size:1rem;
    }
}
`;