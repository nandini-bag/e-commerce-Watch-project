import React from 'react';
import { styled } from "styled-components";
import Dealpic from '../assets/images/deals-pic.jpg';
export const Herosection=()=>{
    return(
        <>
            <Wrapper className='herosection'>
                <div className="dealsImage">
                <img src={Dealpic} alt='dealpic' />
                </div>                
                <div className="dealsContent">
                    <h1>todays deals</h1>
                    <h4>flat <span>50%</span> off</h4>
                    <p>hurry now</p>
                </div>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.section`
    .dealsImage{
        position:relative;
    }
    .dealsImage img{
        width:100%;
        object-fit:cover;        
    }
    .dealsContent{
        z-index:1;
        position:absolute;
        top:10rem;
        right:8rem;
        text-transform:uppercase;
        text-align:center;
        font-size:4rem;
        word-spacing: 0.5rem;
        color:${({theme})=> theme.colors.main_heading};
        padding: 3rem 1rem;
    }
    .dealsContent h4{
        font-size:4rem;
    }
    .dealsContent span{
        color:yellow;
    }
    .dealsContent p{
        color:orange;
        text-align:right;
        margin-top:4rem;
        font-size:3rem;
    }
    @media(max-width:${({ theme })=>theme.media.tab}){
        .dealsContent{
            top:8rem;
            right:7rem;
        }
        .dealsContent h1{
            font-size:4.5rem;
        }
        .dealsContent h4{
            font-size:3.5rem;
        }
        .dealsContent p{
            font-size: 2rem;
            margin-top:4rem;
        }
    }
    @media(max-width:${({ theme })=>theme.media.mobile}){
        .dealsContent{
            top:7rem;
            right:6rem;
        }
        .dealsContent h1{
            font-size:3rem;
        }
        .dealsContent h4{
            font-size:2rem;
        }
        .dealsContent p{
            font-size: 2rem;
            margin-top:3rem;
        }
    }
    @media(max-width:550px){
        .dealsContent{
            top:5rem;
        }
        .dealsContent h1{
            font-size:2.5rem;
        }
        .dealsContent h4{
            font-size:2rem;
        }
        .dealsContent p{
            margin-top:1rem;
            font-size:1.5rem;
        }        
    }
`;