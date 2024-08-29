import React from 'react';
import { styled } from "styled-components";
import { Input } from '../Input';

export const Color=()=>{
    return(
        <>
            <Colors>
             <h2 className='sidebar-title'>Color</h2>
             <div>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>white
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>black
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>blue
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>rosegold
                </label>
             </div>
            </Colors>
        </>
    );
}
const Colors = styled.div`
    padding-inline:3rem;
`;