import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import Over from '../assets/images/round-silver.jpg';
import styled from 'styled-components'; 

export const HeroImage=()=>{
    return(
        <>
            <Wrapper className="section">
                <img src={Over} alt='hero-image'/>
                <div className="hero-content">
                <h2>great collection of luxury watches</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eos neque laborum eaque nam ipsum.</p>
                <NavLink to='/shop'><Button className="btn hero-btn">Explore more</Button></NavLink>
                </div>     
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
img{
    width:100%;
    object-fit: cover;
    text-align:center;
    position:relative;
}
.hero-content{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    color:#fff;
}
.hero-content{
    display:flex;
    justify-content:center;
    align-item:center;
    flex-direction:column;
    text-align:center;
}
h2{
    font-size:4rem;
    font-weight:700;
    color:${({theme})=> theme.colors.main_heading};
    margin-bottom:5rem;
}
p{
    font-size:1.5rem;
    color:#fff;
    margin-block: 3rem;
    font-weight:500;
}
@media(max-width:${({ theme })=>theme.media.tab}){ 
    h2{
    font-size:3rem;
    margin-bottom:3rem;
    }
}
@media(max-width:${({ theme })=>theme.media.mobile}){ 
    h2{
    font-size:2rem;
    margin-bottom:3rem;
    }
p{
    font-size:1rem;
    margin-block: 2rem;
}

}
@media(max-width:640px){ 
    h2{
    margin-bottom:0;
    }
}
@media(max-width:558px){
    .hero-content{
    top:40%;
    left:40%;
    transform:translate(-40%,-40%);
    }
        Button{
            font-size:1rem;
            padding: 1rem;
        }
}
`;