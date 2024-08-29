import React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled } from "styled-components";
import { useGlobalContext } from '../Context';

export const Theme=()=>{
    const { ToggleMode,changeThemeIcon } = useGlobalContext();
    return(
        <>
            <ThemeIcons onClick={ToggleMode}>
            {changeThemeIcon ? <DarkModeIcon className={`icon icon1 ${changeThemeIcon ? 'active' : 'inactive'}`}/> : 
                               <DarkModeOutlinedIcon className='icon mode1'/> } 
            </ThemeIcons>
        </>
    );
}
const ThemeIcons = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
    .icon{
        font-weight:200;
        height:inherit;
    }
    .icon1, .mode1{
        font-size: 2.5rem;
    }
    .active{
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition: all .1s linear;
    }
    .inactive{
        opacity: 0;
        visibility: hidden;
        pointer-events: auto;
        transition: all .1s linear;
    }
    @media(max-width:700px){
    .icon{
        font-size: 2rem;
    }
}
`;