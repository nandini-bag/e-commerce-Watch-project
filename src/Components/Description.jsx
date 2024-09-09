import Quartz from '../assets/images/quartz..jpg'; 
import Curren from '../assets/images/curren.jpg'; 
import Crop from '../assets/images/cropkaroo.jpg'; 
import Sonata1 from '../assets/images/sonata1.jpg';
import styled from 'styled-components'; 

export const Description=()=>{
    return(
        <>
            <Wrapper>
                <div className="gridBox-container">
                    <div className='section section-layout'>
                        <div className='text'>
                            <h2>our amazing <span>watch</span> collectons</h2>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est debitis id nostrum beatae nobis suscipit totam eligendi aperiam maiores.</h3>
                        </div> 
                        <div className='img'>
                            <img src={Quartz} alt='watch-img' className='quartz-image'/>
                        </div>
                    </div>
                    <div className='section section-layout section-layout-two'>
                        <div className='img'>
                        <img src={Curren} alt='watch-img'/>
                        </div>
                        <div className='text'>
                        <h2>perfect <span>watch</span> at perfect timing</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur itaque similique aperiam, rerum iste? Fuga, quod expedita omnis praesentium, voluptatum accusantium.</h3>
                        </div>
                    </div>

                    <div className='section section-layout'>
                        <div className='text'>
                        <h2>gift to your favorite one</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi vitae? Nobis quis laudantium voluptate. Sapiente soluta dolorem quae.</h3>
                        </div>
                        <div className='img'>
                        <img src={Crop} alt='watch-img'/>
                        </div>
                    </div>

                    <div className='section section-layout section-layout-two'>
                        <div className='img'>
                        <img src={Sonata1} alt='watch-img'/>
                        </div>
                        <div className='text'>
                        <h2>sonata <span>watch</span></h2>
                        <h3>Sonata Wedding Silver Dial Women Watch .Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Cumque unde quibusdam facere, reiciendis pariatur
                         aperiam.</h3>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`

.gridBox-container{
    max-width:80%;
    margin:auto;
}
.gridBox-container .section{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:5rem;
    padding:2rem 4rem;
    margin:10rem 0;
    justify-content:center;
}
.section-layout{
    background:linear-gradient(to right, #F0EAE4 10%, white 90%);
}
.section-layout-two{
    background:linear-gradient(to left, #E5EBEE 10%, white 90%);   
}
.section-layout .text{
    padding:5rem;
    display:flex;
    align-items:center;
    flex-direction:column;
    gap:5rem;
    text-align:justify;
    position:relative;
    z-index:1;
}
.section-layout .text:before{
    content:'';
    position:absolute;
    width:15rem;
    height:40rem;
    background:#CFC2AC;
    left:0;
    top:2rem;
    z-index:-1;
}
.section-layout-two .text:before{
    content:'';
    position:absolute;
    width:15rem;
    height:40rem;
    background:#CFC2AC;
    right:0;
    top:1rem;
    z-index:-1;
}
.text h2{
    font-size:2.5rem;
}
.text span{
    font-size:3rem;
    font-weight:800;
    color:${({theme})=> theme.colors.btn};
}
.section img{
    width:100%;
    height:100%;
    object-fit:cover;
}
@media(max-width:1190px){
.section-layout .text:before{
    height:30rem;
}
.section-layout-two .text:before{
    height:30rem;
}
}

@media(max-width:${({ theme })=>theme.media.tab}){ 
.section-layout .text{
    padding:2.5rem;
    gap:2rem;
}
.section-layout .text:before{
    height:25rem;
}
.section-layout-two .text:before{
    height:25rem;
}
.text h2{
    font-size:2rem;
}
.text span{
    font-size:2rem;
}

 }
@media(max-width:840px){
.section-layout .text:before{
    width:10rem;
    height:22rem;
}
}
@media(max-width:${({ theme })=>theme.media.mobile}){  
    .gridBox-container .section{
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(10rem,40rem));
        gap:2rem;
}
.section-layout .text:before{
    width:8rem;
    height:15rem;
}
}
@media(max-width:450px){
    .text h2{
    font-size:1.5rem;
}
.section-layout .text:before{
    width:10rem;
    height:20rem;
}
}

`;

