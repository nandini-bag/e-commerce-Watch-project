import Sonata from '../../assets/images/sonata.jpg';
import Titan from '../../assets/images/titan.jpg';
import Fastrack from '../../assets/images/fastrack.jpg';
import Omega from '../../assets/images/omega.jpg';
import Alpina from '../../assets/images/alpina.jpg';
import Doxa from '../../assets/images/doxa.jpg';
import styled from 'styled-components';

export const ShopByBrand=()=>{
    return(
        <>
            <Wrapper className='section'>
                <h2 className='common-heading'>Recomended brand</h2>
                    <div className='container container-watches container-brand'>
                        <div className='gender-box'>
                            <img src={Sonata} alt='gender pic'/>
                            <h3 className='brand'>sonata</h3>
                        </div>
                        <div className='gender-box'>
                            <img src={Titan} alt='gender pic'/>
                            <h3 className='brand'>Titan</h3>
                        </div>
                        <div className='gender-box'>
                            <img src={Fastrack} alt='gender pic'/>
                            <h3 className='brand'>Fastrack</h3>
                        </div>
                        <div className='gender-box'>
                            <img src={Doxa} alt='gender pic'/>
                            <h3 className='brand'>Doxa</h3>
                        </div>
                        <div className='gender-box'>
                            <img src={Omega} alt='gender pic'/>
                            <h3 className='brand'>Omega</h3>
                        </div>
                        <div className='gender-box'>
                            <img src={Alpina} alt='gender pic'/>
                            <h3 className='brand'><span>Alpina</span></h3>
                        </div>
                    </div>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.section`
.container-brand{
    background:#f0f5ff;
}
.brand{
    position:absolute;
    top:0;
    left:0;
    color:#cc5f2d;
    font-size:3rem;
    text-transform:uppercase;
    letter-spacing:.2rem;
    width:100%;
    padding-block:1.2rem;
    text-align:center;
    background:rgba(0,0,8,0.1);
    backdrop-filter:blur(0.2rem);
}
${'' /* ---------- responsive code start --------- */}
@media(max-width:376px){
    .brand{
    font-size:2rem;
}
}
`;