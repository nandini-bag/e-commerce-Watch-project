import React from "react";
import styled from 'styled-components';
import { Image } from "./Image";
import { CiHeart } from "react-icons/ci";

export const WatchDetails =(props)=>{
    
    return (
        <>
            <Section>
                <div className='container'>
                <div className='card-image'>
                    <Image imageSource={props.imageSource}/>
                    <CiHeart className='icon card-icon'/>
                </div>
                <h2>hello details </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia enim rem earum expedita similique nostrum a repellat quam amet?</p>
                </div>
            </Section>
        </>
    );
}
const Section = styled.section`
width:100%;
`;