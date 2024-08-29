import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import { FaSearch } from "react-icons/fa";
import TuneIcon from '@mui/icons-material/Tune';
import { useGlobalContext } from '../Context';

export const Search=()=>{
    const {ToggleFilterIcon,handleInput,handleSubmit} = useGlobalContext();
    return(
        <>
            <Searchs className='filter-menu-container'>
                <div className='search-div'>
                    <form action='#' onSubmit={handleSubmit}>
                        <input type='text'
                            onChange={(e)=> handleInput(e) }
                            placeholder='search here ...'
                        />
                        <NavLink to='/search'>
                        <Button className='search-btn btn'>
                            <FaSearch className='search-icon icon'/>
                        </Button>
                        </NavLink>
                    </form>
                </div> 
                <div className='filter-div'>
                    <p>Filters</p>
                    <TuneIcon className='filter-icon icon' onClick={ToggleFilterIcon}/>
                </div>
            </Searchs>
        </>
    );
}
const Searchs = styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap:5rem;
    text-transform:capitalize;
    font-size:2rem;  
    width:inherit;

    .filter-menu-container{
        position:relative;
    }
    .filter-menu-container:after{
        content:'';
        position:absolute;
        top:5rem;
        right:0;
        width:100%;
        height:.4rem;
        background:yellow;
    }
 ${'' /* ============= filter-menu-container ============== */}
 
 .filter-div,
 .search-div {
     display:flex;
     justify-content:left;
     align-item:center;
     gap:1rem;
     line-height:14rem;
 }
 .search-div{
    grid-column:2;
 }
 .filter-div{
    grid-column:4;
 }
 form{
    position:relative;
 }
 input{
    ${'' /* background: #f2f4f7; */}
    background: #f0edeb; 
    width: 50rem;
    border: .1rem solid #c9c9c9;
    border-radius: .5rem;
    outline:none;
    height: 3.5rem;
    padding-inline: 2rem;
    font-size: 1.4rem;
    text-transform: capitalize;
 }
 p{    
    font-size: 1.7rem;
 }
 .search-btn{
    position:absolute;
    top:5.4rem;
    right:0;
 }
 .search-icon{
    color:white;
    font-size:1.2rem;
    margin-inline:1rem;
 }
 .filter-icon{
    height:inherit;
    font-size:2.2rem;
    margin-right:2rem;
 }
 @media(max-width:${({ theme })=>theme.media.tab}){    
    input{
       width: 45rem;
       font-size: 1.4rem;
    }
}
@media(max-width:900px){
    .filter-div{
        grid-column:3;
        justify-content:right;
    }
}
@media(max-width:${({ theme })=>theme.media.mobile}){
        margin-right:10rem;
        input{
           width: 35rem;
           font-size: 1.3rem;
        }   
        .filter-div{
           ${'' /* grid-column:4; */}
           justify-content:right;
        }     
}
@media(max-width:700px){
        input{
           width: 30rem;
        }    
}
@media(max-width:550px){
    gap:4rem;
        input{
           width: 22rem;
        } 
        .filter-div p, .icon{
            font-size:1.5rem;
            font-weight:600;
        }
        .icon{
            font-size:1.8rem;
            font-weight:600;
        }
}
`;