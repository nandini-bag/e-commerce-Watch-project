import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
// import { AiFillStar } from "react-icons/ai";
import { Button } from './styles/Button';
import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const SingleCard =(props)=>{
    const titleName = props.watchName.substring(0,30);
    
    return(
        <>
            <SingleCards className='card-container'>
                <section className='card'>
                    <div className='card-image'>
                        <img src={props.imageSource} alt='watch' className='watch-image'/>
                        <div className='heart'>
                            <IoMdHeartEmpty className='icon card-icon'/>
                        </div>
                    </div>
                    <div className='card-details'>
                        <h3 className='card-title'>
                        {titleName.length >= 30 ? `${titleName}...` : `${titleName}`}
                        </h3>
                        <section className='card-reviews'>
                            {/* <AiFillStar className='ratings-star'/> */}
                            <p><span className='total-reviews'> {props.watchReviews}</span></p>
                        </section>
                        <h4 className='watch-price'>
                            <span className='total-reviews'> {props.watchPrice}</span></h4>
                        <div>
                        <NavLink to='/WatchDetails'>
                        <Button className='btn buyNow'>buy now</Button>
                        </NavLink>                            
                        </div>
                    </div>
                </section>
            </SingleCards>
        </>
    );
}
const SingleCards = styled.section`
    border-radius: .5rem ;
    cursor:pointer;
    box-shadow:${({theme})=> theme.colors.shadowSupport};
    background: ${({theme})=> theme.colors.contact_bg};
    .ratings-star{
        color: ${({theme})=> theme.colors.btn};
        font-size:2rem;
        margin-right:1rem;
    }
    .card-details{
        background: ${({theme})=> theme.colors.contact_bg};
        text-transform:capitalize;
        line-height:2rem;
        padding: 1rem 2rem;
        word-spacing: 0.5rem;
        border-radius: 0 0 .5rem .5rem; 
    }
    .card-reviews{
        padding-block:.5rem;
        font-size:1.2rem;
        display:flex;
        align-items:center;
    }
    .buyNow{
        text-align:center;
        margin-bottom:1rem;     
    }
    .btn{
        border-radius: .5rem;
        width:100%;
        margin-top:1rem;
    }
    ${'' /* ======== card-details start ========= */}
    .card-image{
        border-radius: .5rem .5rem 0 0 ;
        display:flex;
        justify-content:center;
        align-item:center;
        padding:1.5rem;
        background:white; 
        position:relative;
    }
    .card-image img:hover{
        transform: scale(1.05);
    }
    .icon{
        font-size: 2.5rem;
        color:#cc5f2d;
    }
    .heart{
        position:absolute;
        right:2rem; 
        top:2rem;
        background:${({ theme })=>theme.colors.contact_bg};
        border-radius:50%;
        padding:.5rem;

        display:flex;
        justify-content:center;
        tex-align:center;
    }
    @media(max-width:559px){
        .buyNow{
            font-size:1.2rem;
        }
    }
`;