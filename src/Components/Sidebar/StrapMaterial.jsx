import React from 'react';
import { styled } from "styled-components";

export const StrapMaterial=()=>{
    return(
        <>
            <Strap>
             <h2 className='sidebar-title'>Strap Material</h2>
             <div>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>metal
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>leather
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>plstic
                </label>
             </div>
            </Strap>
            
        </>
    );
}
const Strap = styled.div`
    padding-inline:3rem;

`;