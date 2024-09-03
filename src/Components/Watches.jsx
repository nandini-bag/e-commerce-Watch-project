import React from 'react';
import { styled } from "styled-components";
import { Search } from './Sidebar/Search';
import { WatchContainer } from './WatchContainer';
import { Herosection } from "./Herosection";
export const Watches =()=>{

    return(
        <>
            <Herosection/>
            <Wrapper className="section section-card">
                <Search/>
                <WatchContainer/>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
    width:inherit;
`;