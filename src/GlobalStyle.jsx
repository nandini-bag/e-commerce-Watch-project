import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: "Lexend", sans-serif;
}
html{
  font-size: 62.5%;
}
body{
  width: 100%;
  height:100vh;
  ${'' /* background: #a9fc03;s */}
}
a{
  text-decoration:none;
}
li{
  list-style:none;
}

${'' /* ------------ style for dark theme ------------- */}
.dark-theme{
  background:${({ theme })=>theme.colors.darkbg};
  h5,h2,p, label,.header, .nav-list > .navlink{
    color: ${({ theme })=>theme.colors.white};
  }
  .navbar-link{
    color:${({ theme })=>theme.colors.white} !important;
  }
  .icon{
    color: ${({ theme })=>theme.colors.white};
  }
  .MainHeader, .sticky{
    background:${({ theme })=>theme.colors.darkbg};
    box-shadow: 0 1px 2px 0 #73675c;
  }
  .filter-text{
    background:${({ theme })=>theme.colors.darkbg_helper};
    color:${({ theme })=>theme.colors.filterText};
  }
  .cards-container{
    background:${({ theme })=>theme.colors.darkbg_helper};
  }
  .common-heading::after{
    background:${({ theme })=>theme.colors.white};
  }
  .btn{
    background:${({ theme })=>theme.colors.btn_helper};
    color:${({ theme })=>theme.colors.btn};
    font-weight:700;
    box-shadow:${({ theme })=>theme.colors.btn_shadow};
  }
  .container-watches{
    background:#e6e3df;
  }
  .section-contact{
    background:${({ theme })=>theme.colors.icon_bg};
  }
}

${'' /* ------------ style for light theme ------------- */}
.light-theme{
  background:${({ theme })=>theme.colors.bg};
  h2,h5,p,.icon, label,.header, .navbar-link, .nav-list > .navlink{
    color: ${({ theme })=>theme.colors.black};
  }
  .icon{
    color: ${({ theme })=>theme.colors.black};
  }
  .MainHeader, .sticky{
    background:${({ theme })=>theme.colors.white};
  }
  .filter-text{
    background:${({ theme })=>theme.colors.darkbg_helper2};
  }
  .common-heading::after{
    background:${({ theme })=>theme.colors.black};
  }
  .btn{
    background:${({ theme })=>theme.colors.btn};
    color:${({ theme })=>theme.colors.white};
    box-shadow:${({ theme })=>theme.colors.btn_shadow};
  }
  .card-container{
    box-shadow:${({theme})=> theme.colors.shadowSupport};
  }
  
}

${'' /* ------------ reusable code ------------- */}

h2{
    text-transform:uppercase;
    font-size:2rem;
    text-align:center;
    letter-spacing:.1rem;
}
.common-heading{
  padding-top:10rem;
  padding-bottom:5rem;
}
h3{
  font-size: 1.2rem;
}
.icons{
  display: flex;
  justify-content:center;
  align-item:center;
  gap:1rem;
  height:cover;
  cursor:pointer;
}
.icon{
  height:inherit;
  cursor:pointer;
}

.userdiv{
  margin-right:1rem;
  line-height:6.5rem;
}
.section{
  ${'' /* border:2px solid #d404a0; */}
  ${'' /* padding:3rem 0; */}
}

.container{
  ${'' /* border:2px solid blue; */}
  gap:2rem;
  margin-inline:2rem;
}
.grid{
  display: grid;
}
.grid-two-column{
  grid-template-columns: repeat(2,1fr);
}
.grid-three-column{
  grid-template-columns:repeat(3, 1fr);
}
.grid-four-column{
  grid-template-columns:repeat(4, 1fr);
}
.hero-text{
  position:absolute;
  color:green;
  top:10rem;
  left:0;
  z-index:1;
}

${'' /* ====================== shop ========*/}
.column-item-list > li{
  line-height: 3rem;
  font-weight:normal;
  cursor:pointer;
  color:#848786;
  font-size:1.2rem;
}
.column-item-list > li:hover ,
.column-item-list > li:active {
  color: ${({ theme })=>theme.colors.btn};
}

${'' /* -============  sidebar style      =============== */}

.sidebar-title{
 ${'' /* border:2px solid red; */}
  text-transform:Capitalize;
  font-size:2rem;
  font-weight:normal;
  margin:4rem 0 2rem 0;
}
.sidebar-label-container{
${'' /* border:2px solid blue; */}
  display: block;
  padding-left: 35px;
  margin-bottom: 12px;
  font-size:1.2rem;
  cursor: pointer;
  position: relative;
}
.sidebar-label-container input{
  border:2px solid red;
  position:absolute;
  opacity:0;
  cursor:pointer;
}   
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
}
.all {
  background: linear-gradient(blue, crimson);
}

.sidebar-label-container:hover input ~ .checkmark {
  background-color: #ccc;
}

.sidebar-label-container input:checked ~ .checkmark {
  background-color: #2196f3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.sidebar-label-container input:checked ~ .checkmark:after {
  display: block;
}

.sidebar-label-container .checkmark:after {
  top: .6rem;
  left: .6rem;
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  background: white;
  box-shadow: .1px 1px 4px 1px rgb(245, 251, 255);
}


${'' /* ======== watchcard start ========= */}
.watch-image{
  ${'' /* border: 2px solid orange; */}
  border-radius: .5rem .5rem 0 0;
  width:100%;
  height:100%;
  object-fit:cover;
}
.watch-price{
  font-size:1.5rem;
  font-weight:600;
}

${'' /* ======== responsive code start ========= */}

@media(max-width:${({ theme })=>theme.media.tab}){
  .header{ position:relative; }
  .navbar{
    border:2px solid pink;
    background:#f5e9df;
    position:absolute;    
    top:0;
    left:0;
    width:100%;
    height:100vh;
    
    display: flex;
    justify-content:center;
    align-items:center;
    z-index:9; 
   
    /* ------- to get transition  -------- */
    
     transform: translateX(100%);
    transition: all 0.1s linear;
    
    /*  ---------  to hide overflow part of the page     ---------- */
    opacity: 0; 
    visibility: hidden;
    pointer-event:none; 
  }
  .nav-list{
    flex-direction:column;
    align-items:center;
    
  }
  /* to show only menu icon */
  /*... when active class present ...*/
  .active{    
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
    
  }
  .iconMenu2{
    z-index:999;
  }

}
@media(max-width:700px){
  .icon{
    font-size:1.5rem;
  }
}
`;