import React from 'react';
import { styled } from "styled-components";
import { Search } from './Sidebar/Search';
import { WatchContainer } from './WatchContainer';

export const Watches =()=>{

    return(
        <>
            <Wrapper className="section section-card">
                <Search/>
                <WatchContainer/>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
    width:100vw;
`;