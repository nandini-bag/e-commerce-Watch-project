import React from 'react';
import { styled } from "styled-components";
import { SingleCard } from './SingleCard';
import customData from '../db/data';
import { useGlobalContext } from './Context';

export const Card =()=>{
    const {alignCard} = useGlobalContext();
    return(
        <>
            <Cards>
            <div className={`cards-container container grid grid-four-column ${alignCard ? 'align' : ''}`}>
            {customData.map((celm)=>{
                return(
                    <SingleCard
                        key={celm.id}
                        imageSource={celm.img}
                        watchName={celm.title}
                        watchReviews={celm.reviews}
                        watchPrice={celm.price}
                        watchCompany={celm.company}
                        watchColor={celm.color}
                        watchCategory={celm.category}
                    />
                )
            })}
            </div>
            </Cards>
        </>
    );
}
const Cards = styled.div`
    padding: 0 5rem;
    .align{
        margin-left:20rem;        
    }
    .cards-container{
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
        gap:2.5rem;
    } 
    @media(max-width:505px){
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(15rem,1fr));
    } 
`;