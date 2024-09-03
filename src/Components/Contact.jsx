import React from 'react';
import { styled } from "styled-components";
import { Button } from './styles/Button';

export const Contact=()=>{
    return(
        <>
            <Wrapper className="section section-contact">
                <div className="container ">
                    <h2 className="common-heading">contact us</h2>
                </div>

                <div className="section-contact-main contact-container ">
                    <form>
                        <div className=" userName grid grid-two-column">
                            <div>
                                <label></label>
                                <input type="text" name="username" 
                                       id="username" placeholder="username" 
                                       required autoComplete="off"/>
                           </div>
                           <div>
                                <label></label>
                                <input type="email" name="email" 
                                       id="email" placeholder="demo@mail.com" 
                                       required autoComplete="off"/>
                           </div>
                        </div>
                        <div>
                            <label></label>
                            <input type="text" name="subject" 
                                   id="subject" placeholder="subject" 
                                   required autoComplete="off"/>
                        </div>
                        <div>
                            <label></label>
                            <textarea name="textarea" id="textarea" 
                                      rows="10" cols="30" placeholder="write your message" 
                                      required autoComplete="off"></textarea>
                        </div>
                        <div className='contact-btn'>
                            <label></label>
                            <Button className="btn ">send message</Button>   
                        </div>
                    </form>
                </div>

                <div className='contact-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6254426477276!2d77.69382617425477!3d12.99579191434911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110b04a3be4b%3A0xcffb252dab2e9643!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1720345572454!5m2!1sen!2sin" 
                width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>                
            </Wrapper> 
        </>
    );
}
const Wrapper = styled.section`
    background: ${({theme})=> theme.colors.contact_bg};  

    .section-contact-main{
    max-width: 60rem;
    margin: 0 auto;
    transition: all .3s linear;
    padding: 2rem;
}
.section-contact-main .grid{
    gap: 2rem;
}
.section-contact-main form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.section-contact-main input,
.section-contact-main textarea{
    padding: 1rem 1.5rem;
    border: .1rem solid #c9c9c9;
    border-radius: .5rem;
    font-size: 1.5rem;
    font-family: "work sans";
    width: 100%;
    outline: none;
    background: #f2f4f7;
}
.section-contact-main input[type="submit"]{
    border: none;
}
.contact-btn{
    display:flex;
    justify-content:right;
}
.contact-map{
    overflow: hidden;
    height:0;
    padding-bottom:30%;
    margin: 2rem 5rem;
    position:relative;
}
iframe{
    border: 0;
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
}
`;