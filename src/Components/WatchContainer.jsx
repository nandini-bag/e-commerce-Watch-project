import React from 'react';
import { styled } from "styled-components";
import { Sidebars } from './Sidebar/Sidebars';
import { Card } from './Card';

export const WatchContainer =()=>{

    return(
        <>
            <Wrapper className="section section-card">
                <Sidebars/>
                <Card/>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
    width:100%;
`;