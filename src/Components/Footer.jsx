import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

export const Footer=()=>{
    return(
        <>
            <Footers className="section section-footer">
                <div className="container container-footer">
                {/* <div className="container container-footer grid grid-four-column"> */}
                    <div className="footer-data f-about">
                        <h4>About</h4>
                        <p className='footer-data-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, veritatis?</p>
                    </div>
                    <div className="footer-data f-links">
                        <h4>Brand</h4>
                        <ul className='column-item-list footer-list'>
                            <li>Titan</li>
                            <li>Fastrack</li>
                            <li>Raga</li>
                            <li>Sonata</li>
                            <li>Rolex</li>
                        </ul>
                    </div>
                    <div className="footer-data f-services">
                        <h4>customer service</h4>
                        <ul className='column-item-list footer-list'>
                            <li>payment options</li>
                            <li>track order</li>
                            <li>return & services</li>
                            <li>find store</li>
                        </ul>
                    </div>
                    <div className="footer-data f-address">
                        <h4>contact us</h4>
                        <ul className='column-item-list footer-list'>
                            <li>1800-266-0123</li>
                            <li>customercare@watch.co.in</li>
                            <li>help & Contact</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-data"><p className='footer-data-para'>Follow Us On :</p></div>
                    <div className="footer-data f-social-icons">                      
                        <NavLink to="https://www.instagram.com/nandinibag92/">
                            <InstagramIcon className="icon"/>
                        </NavLink>
                        <NavLink to="https://www.youtube.com">
                            <YouTubeIcon className="icon"/>
                        </NavLink>
                        <NavLink to="https://www.twitter.com">
                            <XIcon className="icon"/>
                        </NavLink>
                   </div>
                   <div className="footer-data f-credits">
                        <p className='footer-data-para'>Copyright @2025 All rights rserved | This Template is made with ♥️ by Nandini </p>
                   </div>
               </div>
            </Footers>
        </>
    );
}
const Footers = styled.footer`
${'' /* border:2px solid red; */}
background: ${({theme})=> theme.colors.footer_bg};
padding-block:3rem;


h4{
    margin-bottom: 3rem;
    font-size: 1.4rem;
    text-transform:uppercase;
    color:${({theme})=> theme.colors.contact_bg};
}
.footer-list{
    text-transform:capitalize;
}
.f-social-icons{
    ${'' /* border:2px solid yellow; */}
    display: flex;
    justify-content: center;
    align-item: center;
    gap:2rem;
    font-size:7rem;
    height:8rem;
}
.footer-data-para{
    color:${({theme})=> theme.colors.fpara};
    font-size:1.2rem;
    text-align:center;
    word-spacing:.2rem;
}
.icon{
    padding:.6rem;
    font-size: 4rem;
    background:${({theme})=> theme.colors.icon_bg};
    border-radius:1.9rem;
    margin:1rem;
}
.f-about p{
    text-align:start;
}
.container-footer{
    padding:5rem;
    ${'' /* padding: 2rem; */}
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
        gap:2.5rem;
}
    @media(max-width:${({ theme })=>theme.media.tab}){
        .container-footer{
        ${'' /* grid-template-columns: repeat(auto-fill,minmax(20rem,1fr)); */}
        ${'' /* gap:2.5rem; */}
} 

    }
`;