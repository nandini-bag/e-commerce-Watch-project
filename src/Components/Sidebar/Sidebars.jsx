import React from 'react';
import { styled } from "styled-components";
import { Category } from './Category';
import { Price } from './Price';
import { Color } from './Colors';
import { StrapMaterial } from './StrapMaterial';
import { useGlobalContext } from '../Context';

export const Sidebars=()=>{
    const {showFilter} = useGlobalContext();
    
    return(
        <>
            <Section>
            <div className= {`sidebar-content ${showFilter ? 'show' : 'hide'}`}>
            <Category/>
            <Price/>
            <Color/>
            <StrapMaterial/>
            </div> 
            </Section>
        </>
    );
}
const Section = styled.section`
    max-width:20rem;
    line-height:2rem;
    position:absolute;
    text-transform:capitalize;

    ${'' /* ----------------  style for hide-show  ----------------  */}
    .hide{
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        transition: all .1s linear;       
        position:relative;
    }
    .show{
        transform: translateX(0);
        opacity: 1;
        visibility: hidden;
        transition: all .1s linear;       
        position:relative;
    }
    .show:after{
        content:'';
        position:absolute;
        top: -1.5rem;
        right:0;
        width:.1rem;
        height:85rem;
        background:${({theme})=> theme.colors.contact_bg};
    }
`;