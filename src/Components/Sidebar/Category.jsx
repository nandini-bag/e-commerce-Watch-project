import React from 'react';
import { styled } from "styled-components";

export const Category=()=>{

    return(
        <>
            <Categorys>
             <h2 className='sidebar-title'>category</h2>
             <div>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' 
                           />
                    <span className='checkmark'></span>All
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' 
                           />
                    <span className='checkmark'></span>smart Watch
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' 
                           />
                    <span className='checkmark'></span>Luxury Watch
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' 
                           />
                    <span className='checkmark'></span>digital watch
                </label>
             </div> 
            </Categorys>
        </>
    );
}
const Categorys = styled.div`
     padding-inline:3rem;
    .line {
        margin-top: 3rem;
    }
`;