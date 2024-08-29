import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from "styled-components";

export const FilterIcon=()=>{
    return(
        <>
            <FilterIcons className='icons'>
            <KeyboardArrowDownIcon className='icon'/>
            </FilterIcons>
        </>
    );
}
const FilterIcons = styled.div`

.icon{
    font-size: 2.5rem;
}
    
`;