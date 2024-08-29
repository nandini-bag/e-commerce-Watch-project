import styled from 'styled-components';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Sonata from '../assets/images/sonata.jpg';
import Titan from '../assets/images/titan.jpg';
import Fastrack from '../assets/images/fastrack.jpg';
import Omega from '../assets/images/omega.jpg';
import Alpina from '../assets/images/alpina.jpg';
import Doxa from '../assets/images/doxa.jpg';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context'; 

import Carousel from "react-multi-carousel";
import Luxury from '../assets/images/casio2.jpg';
import Analog from '../assets/images/analog-watch.jpg';
import Casio from '../assets/images/casio1.jpg';
import Analog2 from '../assets/images/analog2.jpg';
import Gift from '../assets/images/gift.jpg';
import Digital from '../assets/images/digital-watch1.jpg';
import Smart from '../assets/images/smart-watches.jpg';
import Smart2 from '../assets/images/analog1.jpg';



export const Shop=()=>{
    const {responsive} = useGlobalContext();

    return (
        <>
            <Wrapper>
                <Carousel responsive={responsive} 
                          showDots={true}
                          infinite={true}
                          transitionDuration={500}
                          className='carousel'>
                    <div className='slide-img'>
                        <img src={Luxury} alt='Luxury Watch image'/>
                        <div className='overlay-analog'>
                            <h2>luxury watch</h2>
                            <p>Lorem ipsum dolor icing elit.maxime consequuntur maiores reiciendis vero placeat quia itaque!</p>
                            <div className='slider-btn'>
                            <NavLink to='/*' >
                                <Button className='btn slide-btn'>explore more</Button>
                            </NavLink>  
                            </div>  
                        </div>
                    </div>
                    <div className='slide-img'>
                        <img src={Analog} alt='Analog watch image'/>
                        <div className='overlay-analog'>
                            <h2>cartier watch</h2>
                            <p>Lorem ipsum dolor sit amet consectetur,maiores reiciendis vero placeat quia itaque!</p>
                            <div className='slider-btn'>
                            <NavLink to='/*'>
                                <Button className='btn'>explore more</Button>
                            </NavLink>  
                            </div>
                        </div>
                    </div>
                    <div className='slide-img'>
                        <img src={Casio} alt='smart watch image'/>
                        <div className='overlay-analog'>
                            <h2>casio watch</h2>
                            <p>Lorem ipsum dolor sit amet consectetur,maiores reiciendis vero placeat quia itaque!</p>
                            <NavLink to='/*' className='slider-btn'>
                                <Button className='btn'>explore more</Button>
                            </NavLink>  
                        </div>
                    </div>
                    <div className='slide-img'>
                        <img src={Analog2} alt='smart watch image'/>
                        <div className='overlay-analog'>
                            <h2>analog watch</h2>
                            <p>Lorem ipsum dolor sit amet cuntur maiores reiciendis vero placeat quia itaque!</p>
                            <div className='slider-btn'>
                            <NavLink to='/*'>
                                <Button className='btn'>explore more</Button>
                            </NavLink> 
                            </div> 
                        </div>
                    </div>
                    <div className='slide-img'>
                        <img src={Gift} alt='smart watch image'/>
                        <div className='overlay-analog'>
                            <h2>curren watch</h2>
                            <p>Lorem ipsum dolor sit amet consectetur,maiores reiciendis vero placeat quia itaque!</p>
                            <div className='slider-btn'>
                            <NavLink to='/*'>
                                <Button className='btn'>explore more</Button>
                            </NavLink>  
                            </div>
                        </div>
                    </div>
                    <div className='slide-img'>
                        <img src={Digital} alt='Digital Watch image'/>
                        <div className='overlay-analog'>
                            <h2>digital watch</h2>
                            <p>Lorem ipsum dolor sit consequuntur maiores reiciendis vero placeat quia itaque!</p>
                            <div className='slider-btn'>
                            <NavLink to='/*'>
                                <Button className='btn'>explore more</Button>
                            </NavLink>  
                            </div>
                        </div>
                    </div>

                    <div className='slide-img'>
                        <img src={Smart} alt='smart watch image'/>
                        <div className='overlay-analog'>
                            <h2>smart watch</h2>
                            <p>Lorem ipsum dolor sit amet  quaerat maxime consequuntur maiores reiciendis vero placeat quia itaque!</p>
                            <div className='slider-btn'>
                            <NavLink to='/*'>
                                <Button className='btn'>explore more</Button>
                            </NavLink> 
                            </div> 
                        </div>
                    </div>
                    <div className='slide-img'>
                        <img src={Smart2} alt='smart watch2 image'/>
                        <div className='overlay-analog'>
                            <h2>Tissot watch</h2>
                            <p>Discover the latest additions to the Tissot collection and find the perfect timepiece, to wear or to gift.</p>
                            <div className='slider-btn'>
                            <NavLink to='/*'>
                                <Button className='btn'>explore more</Button>
                            </NavLink>
                            </div>  
                        </div>
                    </div>
                </Carousel>
            <div className='section'>
                <h2 className='common-heading'>shop by gender</h2>
                    <div className='container container-watches'>
                        <div className='gender-box'>
                            <img src='https://gcshopeg.com/cdn/shop/products/NJ0100-89L_1.jpg?v=1569318553&width=800' alt='gender pic'/>
                            <div className='gender-text-box'>
                                <h2 className='gender-text'>men watch </h2>
                                <AllInclusiveIcon className='icons gender-text-icon'/>
                            </div>                          
                        </div>
                        <div className='gender-box'>
                            <img src='https://cdn.shopify.com/s/files/1/0551/2875/2297/files/p-p_3_480x480.jpg?v=1703222538' alt='gender pic'/>
                            <div className='gender-text-box'>
                                <h2 className='gender-text'>women watch </h2>
                                <AllInclusiveIcon className='icons gender-text-icon gender-text-icon1'/>
                            </div>
                        </div>
                        <div className='gender-box'>
                            <img src='https://www.gioiellerialucchese.it/14939-thickbox_default/daniel-wellington-
                                    ladies-watch-petite-melrose-dw00100217.jpg' alt='gender pic'/>
                            <div className='gender-text-box'>
                                <h2 className='gender-text'>unisex watch </h2>
                                <AllInclusiveIcon className='icons gender-text-icon'/>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='section'>
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
            </div>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.section`
border:2px solid magenta;
.slide-img{
    height:100%;
    position:relative;
}
.overlay-analog{
    width:70rem;
    display:flex;
    justify-content:center;
    align-item:center;
    flex-direction:column;
    position:absolute;
    top:4rem;
    left:30rem;
    padding:1.5rem;
}
.overlay-analog h2{
    font-size:3.5rem;
    color:#faf4f0;
    margin-bottom:2rem;
} 
.overlay-analog p{
    font-size:1.5rem;
    color:#fff;
    line-height: 2.5rem;
    font-weight:500;
} 
.slider-btn{
    margin-top:2rem;
    text-align:center;
}
.slide-img img{
    border:2px solid brown;
    width:100%;
    height:80%;
    object-fit:cover;
    z-index:999rem;
}

.slider-text h2,p{
    color:white;
}
.twowatch{
    width:100%;
    height:100%;
    object-fit:cover;
}
.container-watches{
    max-width:100%;
    margin:auto;
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(30rem,1fr));
    padding:4rem 8rem;
    background:#f5e9df;
}
.gender-box{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    position:relative;
}
.gender-box img{
    border-radius:.5rem;
    width:100%;
    hight:100%;
    object-fit:cover;
}
.gender-text-box{
    width:100%;
    text-align:center;  
    background:transparent;

    position:absolute;
    bottom:5rem;
    left:0; 
    padding:2rem;
}
.gender-text{
    position:relative;
    font-size:3rem;
}
.gender-text-icon{
    color:#cc5f2d;
    font-size:3rem;
    font-weight:900;
    position:absolute;
    left:18.5rem;
    top:5rem;    
}
.gender-text-icon1{
    bottom:2.2rem; 
}
.gender-text:before{
    content:'';
    position:absolute;
    left:3rem;
    top:4.5rem;
    width:12rem;
    height:.2rem; 
    color:#cc5f2d;  
    background:#cc5f2d;
}
.gender-text:after{
    content:'';
    position:absolute;
    right:1.5rem;
    top:4.5rem;
    width:12rem;
    height:.2rem; 
    color:#cc5f2d;  
    background:#cc5f2d;
}
.container-brand{
    background:#f0f5ff;
}
.brand{
    position:absolute;
    top:0;
    left:0;
    color:#cc5f2d;
    font-size:2.5rem;
    text-transform:uppercase;
    letter-spacing:.2rem;
    width:100%;
    padding-block:1.2rem;
    text-align:center;
    background:#bfbfbf;
    opacity:.8;
}

${'' /* ======== responsive code start ========= */}

@media(max-width:${({ theme })=>theme.media.tab}){

.overlay-analog{
    width:70rem;
    text-align:center;
    position:absolute;
    top:1rem;
    left:12rem;
    padding:3rem;
}
.overlay-analog h2{
    font-size:2.5rem;
    color:#faf4f0;
    margin-bottom:1rem;
} 
.overlay-analog p{
    font-size:1.2rem;
    color:#fff;
    line-height: 2rem;
.slider-btn{
    margin-top:2rem;
    margin-left:2rem;
}
.slide-btn{
    color:purple;
    font-size:1rem;
    font-weight:900;
}
}
@media(max-width:${({ theme })=>theme.media.mobile}){

.overlay-analog{
width:100%;
position:absolute;
top:0;
left:0;
padding:1.5rem;
}
.overlay-analog h2{
font-size:2rem;
}
.overlay-analog .btn{
    font-size:1rem;
    font-weight:600;
}
}
`;