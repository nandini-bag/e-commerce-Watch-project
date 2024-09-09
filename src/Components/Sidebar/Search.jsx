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
    grid-template-columns:1fr 1fr;
    grid-gap:2rem;
    padding-inline:5rem;
    padding-block:2rem;
    justify-items: right;
    text-transform:capitalize;
    position:relative;
    margin-top:2rem;

 ${'' /* ============= filter-menu-container ============== */}
    .filter-div,
    .search-div {
        display:flex;
        align-item:center;
        gap:1rem;
        line-height:5rem;
    }
    form{
        position:relative;
    }
    input{
        width:50rem;
        background: #f0edeb; 
        border: .1rem solid #c9c9c9;
        border-radius: .5rem;
        outline:none;
        height: 3.5rem;
        padding-inline: 2rem;
        text-transform: capitalize;
    }
    p{    
        font-size: 1.7rem;
    }
    .search-btn{
        position:absolute;
        top:.5rem;
        right:0;
    }
    .search-icon{
        color:white;
        font-size:1.1rem;
        margin-inline:.5rem;
    }
    .filter-icon{
        height:inherit;
        font-size:2.2rem;
        margin-right:2rem;
    }
 @media(max-width:${({ theme })=>theme.media.tab}){  
    input{
       width: 40rem;
       font-size: 1.3rem;
    }
    p{    
        font-size: 1.5rem;
    } 
    .filter-icon{
        font-size:2rem;
    }   
}
@media(max-width:700px){ 
       justify-items:left;
       grid-gap:0;
    .search-btn{
        top:.5rem;
        right:0;
    }
    .filter-div{
       grid-column:span 2;
    }
}
@media(max-width:546px){
    input{
       width: 28rem;
       height:3rem;
    }
    .search-icon{
        font-size:1rem;
        margin-inline:1rem;
    }
    .search-btn{
        top:.5rem;
        right:0;
    }
}
`;