// import { NavLink } from "react-router-dom";
// import { Button } from "./styles/Button";
// import Over from '../assets/images/round-silver.jpg';
import styled from 'styled-components';

export const HeroImage=()=>{
    return(
        <>
            <Wrapper className='section'>
                <h2 className='section-header'>amazing collection of <span>luxury watches </span></h2>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
width:100%;
padding-inline:20rem;
margin-top:5rem;
line-height:5rem;
display:flex;
justify-content:center;
align-item:center;

.section-header{
    text-transform:capitalize;
    font-size:3.5rem;
    word-spacing:.8rem;
    
    padding:1rem;
}
.section-header span{
    font-size:4rem;
    font-weight:800;
    color:${({theme})=> theme.colors.btn};
}
@media(max-width:${({ theme })=>theme.media.tab}){ 
    padding:4rem 10rem;
    .section-header{
        font-size:2.5rem;
    }
    .section-header span{
        font-size:3rem;
    }
}
@media(max-width:${({ theme })=>theme.media.mobile}){ 
    padding:2rem 10rem;
    margin-top:2rem;
    line-height:4rem;
    .section-header{
        font-size:2.2rem;
    }
    .section-header span{
        font-size:2.5rem;
    }

}
@media(max-width:558px){
    padding:2rem 6rem;
    .section-header{
        font-size:2rem;
    }
    .section-header span{
        font-size:2.2rem;
    }
}
@media(max-width:425px){
    padding:0 6rem;
    .section-header{
        font-size:1.8rem;
    }
}
`;