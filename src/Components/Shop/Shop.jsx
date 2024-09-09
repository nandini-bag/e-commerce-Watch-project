import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Context';

import Carousel from "react-multi-carousel";
import Winner from '../../assets/images/winner.jpg';
import Analog from '../../assets/images/analog-watch.jpg';
import Casio from '../../assets/images/casio1.jpg';
import Analog2 from '../../assets/images/analog2.jpg';
import Gift from '../../assets/images/gift.jpg';
import Digital from '../../assets/images/business.jpg';
import Smart from '../../assets/images/smartWatch.jpg';
import iwcWatch from '../../assets/images/iwc..jpg';
import { ShopByGender } from './ShopByGender';
import { ShopByBrand } from './ShopByBrand';


export const Shop=()=>{
    const {responsive} = useGlobalContext();

    return (
        <>
            <Wrapper>
                <Carousel responsive={responsive} 
                        //   showDots={true}
                          infinite={true}
                          transitionDuration={100}
                          className='carousel'>
                    <div className='slide-img'>
                        <img src={iwcWatch} alt='smart watch2 image'/>
                        <div className='overlay-analog'>
                            <h2>iwc-Portuguese watch</h2>
                            <p>Discover the latest additions to the Tissot collection and find the perfect timepiece, to wear or to gift.</p>
                            <div className='slider-btn'>
                            <NavLink to='/*'>
                                <Button className='btn'>explore more</Button>
                            </NavLink>
                            </div>  
                        </div>
                    </div>
                    <div className='slide-img'>
                        <img src={Winner} alt='Luxury Watch image'/>
                        <div className='overlay-analog'>
                            <h2>luxury watch</h2>
                            <p>Lorem ipsum dolor icing elit.maxime consequuntur maiores reiciendis vero placeat quia itaque!</p>
                            <div className='slider-btn'>
                            <NavLink to='/*' >
                                <Button className='btn'>explore more</Button>
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
                            <h2>smart watch..</h2>
                            <p>Lorem ipsum dolor sit amet  quaerat maxime consequuntur maiores reiciendis vero placeat quia itaque!</p>
                            <div className='slider-btn'>
                            <NavLink to='/*'>
                                <Button className='btn'>explore more</Button>
                            </NavLink> 
                            </div> 
                        </div>
                    </div>
                </Carousel>
                <ShopByGender/>
                <ShopByBrand/>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.section`

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
    width:100%;
    height:80%;
    object-fit:cover;
    z-index:999rem;
}
.slider-text h2,p{
    color:white;
}
.container-watches{
    width:100%;
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
}
.slider-btn{
    margin-top:2rem;
    margin-left:2rem;
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
@media(max-width:460px){
    .container-watches{
        grid-template-columns: repeat(auto-fill,minmax(60px,300px));
    }
}
`;