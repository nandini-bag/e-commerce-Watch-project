import React from 'react';
import { styled } from "styled-components";

export const Price=()=>{
    return(
        <>
            <Prices>
             <h2 className='sidebar-title'>Price</h2>
             <div>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>$ 1000 - $ 2000
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>$ 2000 - $ 3000
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>$ 3000 - $ 4000
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>$4 000 - $ 5000
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>$ 5000 - $ 6000
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>$ 6000 - $ 7000
                </label>
                <label className='sidebar-label-container color-title'>
                    <input type='radio' name='test' />
                    <span className='checkmark'></span>$ 7000 - $ 8000
                </label>
             </div>
            </Prices>
        </>
    );
}
const Prices = styled.div`
    ${'' /* border:2px solid purple; */}
    padding-inline:3rem;
`;