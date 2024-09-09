import { ImInfinite } from "react-icons/im";
import Women from '../../assets/images/womenWatch.jpg';
import styled from 'styled-components';

export const ShopByGender=()=>{
    return(
        <>
            <Wrapper className='section'>
                <h2 className='common-heading gender-heading'>shop by gender</h2>
                    <div className='container container-watches'>
                        <div className='gender-box'>
                            <img src='https://gcshopeg.com/cdn/shop/products/NJ0100-89L_1.jpg?v=1569318553&width=800' alt='gender pic'/>
                            <div className='gender-text-box'>
                                <h2 className='gender-text'>men watch </h2>
                                <ImInfinite className='icons gender-text-icon'/>
                            </div>                          
                        </div>
                        <div className='gender-box'>
                            <img src={Women} alt='gender pic'/>
                            <div className='gender-text-box'>
                                <h2 className='gender-text'>women watch </h2>
                                <ImInfinite className='icons gender-text-icon'/>
                            </div>
                        </div>
                        <div className='gender-box'>
                            <img src='https://www.gioiellerialucchese.it/14939-thickbox_default/daniel-wellington-
                                    ladies-watch-petite-melrose-dw00100217.jpg' alt='gender pic'/>
                            <div className='gender-text-box'>
                                <h2 className='gender-text'>unisex watch </h2>
                                <ImInfinite className='icons gender-text-icon'/>
                            </div>
                        </div>
                    </div>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
.gender-heading{
    padding-top:0;
}
.gender-text-box{
    ${'' /* border:2px solid blue; */}
    width:80%;
    margin:auto;
    text-align:center;  
    overflow:hidden;
    display:inline-block;
    background:transparent;

    position:absolute;
    bottom:2rem;
    left:10%; 
}
.gender-text{
    ${'' /* border:2px solid pink; */}
    font-size:3rem;
    padding-block:2.5rem;
    position:relative;
}
.gender-text-icon{
    color:#cc5f2d;
    font-size:3.5rem;
    font-weight:900;
    position:absolute;
    bottom:0;
    left:45%;
}
.gender-text:before{
    content:'';
    position:absolute;
    left:0;
    bottom:1.4rem;
    width:100%;
    height:.2rem; 
    color:#cc5f2d;  
    background:#cc5f2d;
}
${'' /* ---------- responsive code start --------- */}
@media(max-width:830px){
    .gender-text{
    font-size:2rem;
}
}
@media(max-width:830px){
    .gender-text-box{
    width:70%;
    left:15%;
    }
    .gender-text{
    font-size:4rem;   
    }
}
@media(max-width:768px){
    .gender-text{
    font-size:2.5rem;
}
.gender-text-icon{
    font-size:3rem;
}
}
@media(max-width:478px){
    .gender-text{
    font-size:1.5rem;
}
}
`;