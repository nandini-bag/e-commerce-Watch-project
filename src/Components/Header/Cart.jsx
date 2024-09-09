import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { styled } from "styled-components";

export const Cart=()=>{
    return(
        <Wrapper>
            <FaRegHeart className='icon cart-icon'/>
            <RiShoppingCartFill className='icon cart-icon'/>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-item:center;
    gap:1rem;
    .cart-icon{ font-size: 2rem;  }
    @media(max-width:700px){
        .cart-icon{ 
            font-size: 1.8rem; 
        }
    }
    @media(max-width:550px){
        .icon{ 
            opacity: 0; 
            display:none;
        }
    }
`;