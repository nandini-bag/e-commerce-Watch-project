import React from 'react';
import FitbitTwoToneIcon from '@mui/icons-material/FitbitTwoTone';
import { IoClose } from "react-icons/io5";
import { styled } from "styled-components";
import { useGlobalContext } from '../Context';

export const Menu=()=>{
    const { ToggleMenu,changeMenuIcon } = useGlobalContext();
    return(
        <>
            <MenuIcons onClick={ToggleMenu} className='menuicons' >
            {changeMenuIcon ? <FitbitTwoToneIcon className={`icon iconMenu ${changeMenuIcon ? 'change' : 'unchange'}`}/>  : 
                              <IoClose className='icon iconMenu2'/> }
            </MenuIcons>
        </>
    );
}
const MenuIcons = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;

    ${'' /* ------- initially we hide mobile menu icons -------- */}
    opacity: 0;
    visibility: hidden;
    pointer-events: auto;
    transition: all .1s linear;

    .icon{
        font-size: 2.5rem;
        font-weight:200; 
        height:inherit;
    }
    .change{
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition: all .1s linear;
    }
    .unchange{
        opacity: 0;
        visibility: hidden;
        pointer-events: auto;
        transition: all .1s linear;
    }

    ${'' /* ------- responsive code for mobile menu icons -------- */}
    

    ${'' /* //998px */}
@media (max-width:${({ theme })=> theme.media.tab}){

        ${'' /* ------- show mobile menu icons -------- */}
        opacity: 111;
        visibility: visible;
        pointer-events: auto;
        transition: all .1s linear;
}
@media(max-width:700px){
    .icon{
        font-size: 2.5rem;
    }
}
`;