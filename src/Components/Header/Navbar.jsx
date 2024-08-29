import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { styled } from "styled-components";
import ShopWatch from "../../assets/images/shopwatch.jpg";
import { Button } from '../styles/Button';
import { useGlobalContext } from '../Context';

export const Navbar=()=>{
    const { responsiveMenu } = useGlobalContext();
    return(
        <>
            <Nav className={`navbar ${responsiveMenu  ? 'active' : 'close-icon'}`} >
                <ul className='nav-list'>
                    <li className="navbar-parent-list">
                    <NavLink to='/' className='navbar-link'>
                    Home
                    </NavLink></li>
                    <li className="navbar-parent-list">
                        <NavLink to='/watches' className='navbar-link'>Shop</NavLink>
                        <div className="subMenu grid grid-four-column">
                            <div className="column-item grid-item">
                                <h4>digital watch</h4>
                                <img src='https://m.media-amazon.com/images/I/7127WGloOPL._SX679_.jpg' alt='digitalWatch' className='categoryImage'/>
                                <NavLink to='/explore'>
                                <Button className='exploreBtn'><h3>explore more <FaArrowRightLong/></h3></Button>
                                </NavLink>
                            </div>
                            <div className="column-item grid-item">
                                <h4>analog watch</h4>
                                <img src='https:///www.maximawatches.com/cdn/shop/files/69370CMGI.jpg?v=1719560170' alt='analogWatch' className='categoryImage'/>                       
                                <NavLink to='/explore'>
                                <Button className='exploreBtn'><h3>explore more <FaArrowRightLong/></h3></Button>
                                </NavLink>
                            </div>
                            <div className="column-item grid-item">
                                <h4>smart watch</h4>
                                <img src='https:///www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw499f0fb2/images/Titan/Catalog/90166AP01_1.jpg?sw=800&sh=800' alt='smartWatch' className='categoryImage'/>                       
                                <NavLink to='/explore'>
                                <Button className='exploreBtn'><h3>explore more <FaArrowRightLong/></h3></Button>
                                </NavLink>
                            </div>
                            <div className="column-item grid-item">
                                <h4>luxury watch</h4>
                                <img src='https:///m.media-amazon.com/images/I/51yT0uUJ0JL._SX679_.jpg' alt='luxuryWatch' className='categoryImage'/>                       
                                <NavLink to='/explore'>
                                <Button className='exploreBtn'><h3>explore more <FaArrowRightLong/></h3></Button>
                                </NavLink>
                            </div>
                        </div>
                    </li>
                    <li className="navbar-parent-list">
                        <NavLink to='/shop' className='navbar-link'>Watches</NavLink>
                        <div className="subMenu grid grid-four-column">
                            <div className="column-item grid-item">
                                <h4>Shop by Brand</h4>
                                <ul className='column-item-list'>
                                    <li>alpina</li>
                                    <li>angelus</li>
                                    <li>doxa</li>
                                    <li>bovet</li>
                                    <li>bremont</li>
                                    <li>bvlgari</li>
                                    <li>omega</li>
                                </ul>
                            </div>
                            <div className="column-item grid-item">
                            <h4>Shop by Gender</h4>
                                <ul className='column-item-list'>
                                    <li>watches for male</li>
                                    <li>watches for female</li>
                                    <li>unisex watches</li>
                                </ul>
                                <h4>Shop by feature</h4>
                                <ul className='column-item-list'>
                                    <li>ceramic watches</li>
                                    <li>gold watches</li>
                                    <li>rose gold watches</li>
                                    <li>titanium watches</li>
                                </ul>
                            </div>
                            <div className="column-item grid-item">
                                <h4>Shop by material</h4>
                                <ul className='column-item-list'>
                                    <li>automatic watches</li>
                                    <li>mechanical watches</li>
                                    <li>quartz watches</li>
                                    <li>tourbillon watches</li>
                                    <li>world timer watches</li>
                                    <li>chronograph watches</li>
                                    <li>peerpetual chalender watches</li>
                                </ul>
                            </div>
                            <div className="column-item grid-item">
                                <img src={ShopWatch} alt="shop" className="shopghadi"/>
                            </div>
                        </div>
                    </li>
                    <li className="navbar-parent-list"><NavLink to='/contact' className='navbar-link'>Contact</NavLink></li>                   
                </ul>
            </Nav>
        </>
    );
}
const Nav = styled.nav`
    display: flex;
    justify-content:center;
    align-items:center;
    gap:2rem;

    .nav-list{
        display: flex;
        gap: 4rem;
        list-style: none;
    }
    .navbar-parent-list{
        line-height:6rem;
    }
    .navbar-link{
        color:black;
        position: relative;
    }
    .navbar-link:link, .navbar-link:visited{
        display:inline-block;
        text-transform: capitalize;
        font-size: 1.5rem;
        font-weight:600;
        transition: all 0.3s linear; 
        color: ${({theme})=> theme.colors.black};
    }
    .navbar-link::after{
        content:'';
        position:absolute;
        background:#02b6c7;
        width: 0;
        height:.2rem;
        top:4rem;
        bottom:0;
        left:0;
        transition:width .2s;
    }
    .navbar-link:hover::after{
        width:100%;
    }
    .subMenu{
        background: ${({theme})=> theme.colors.white};
        z-index: 9999;
        position: absolute;
        left:0;
        box-shadow: ${({theme})=> theme.colors.shadowSupport};
        transition: all .2s linear;
        padding: 4rem 7rem;
        width: 100%;

        opacity: 0;
        visibility: hidden;
    } 
    .grid-item > .categoryImage{
       max-width:50%;
    } 
    .exploreBtn{
        margin-top:2.5rem;
        background: ${({theme})=> theme.colors.icon_bg};
    }                      
    .exploreBtn > h3{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:1rem;
        cursor:pointer;
    }
    .nav-list > .navbar-parent-list:hover > .subMenu{
       visibility: visible;
       opacity: 1;
    }
${'' /* ======== shop-submenu start ========= */}
.grid-item{
    line-height:8rem;
    display: flex;
    justify-content: right;
    align-items: center;
    flex-direction: column;
    position:relative; 
}
h4{
    text-transform:uppercase;
    font-size:1.2rem;
    font-weight:900;
    position:relative;
    color:${({theme})=> theme.colors.black};
}
.watch-item{
    border:2px solid green;
}
.column-item-list{
    text-transform:capitalize;
}
.grid-item > .shopghadi{
    width:100%;
    height:100%;
    object-fit:cover;
}
`;