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
                const {id,img,title,reviews,price,company,color,category} = celm;
                return(
                    <SingleCard
                        key={id}
                        imageSource={img}
                        watchName={title}
                        watchReviews={reviews}
                        watchPrice={price}
                        watchCompany={company}
                        watchColor={color}
                        watchCategory={category} />
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
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
        gap:2.5rem;
    } 
    @media(max-width:708px){
    .cards-container{
        grid-template-columns: repeat(auto-fill,minmax(18rem,1fr));
        gap:2.5rem;
    } 
    }
`;