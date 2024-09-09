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
  .section-header{
    text-shadow:0 2px 3px #C0B7B0;
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
  .section-header{
    text-shadow:0 3px 3px #9D958E;
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
  display:grid;
  grid-template-columns:repeat(4,1fr);
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
${'' /* -============  sidebar style      =============== */}
.sidebar-title{
  text-transform:Capitalize;
  font-size:2rem;
  font-weight:normal;
  margin:4rem 0 2rem 0;
}
.sidebar-label-container{
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

${'' /* ============ hover underline code =========== */}
${'' /* ======== watchcard start ========= */}
.watch-image{
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
  .mainHeader{
    position:relative;
  }
  .logo{
    z-index:9999999999;
  }
    .icons{
        grid-column:5;
    }
    .navbar{
        grid-column:7;
        position:absolute;
        background:#A1A0A0;
        left:0;
        top:0;
        width:100%;
        height:100vh;

        display:flex;
        justify-content:center;
        align-item:center;
        z-index:99999;

        transform:translateX(100%);
        transition:all .1s linear;
        opacity:0;
        visibility:hidden;
        display:none;

    }
    .nav-list{
    display:flex;
    flex-direction:column;
    padding-top:5rem;
  }
  .active.navbar{
    transform:translateX(0);
    opacity:1;
    visibility:visible;
    display:block;
  }
  .iconMenu2{   
    z-index:999999;   
  }
  ${'' /* .navbar{
    background:#A1A0A0;
    position:absolute;
    left:0;
    left:-25rem;
    top:5rem;
    width:100%;
    height:100vh;

    display:flex;
    justify-content:center;
    align-item:center;
    z-index:9;

    transform:translateY(-100%);
    transition:all .1s linear;
    opacity:0;
    visibility:hidden;
  } */}
  ${'' /* .nav-list{
    display:flex;
    flex-direction:column;
    padding-top:5rem;
  } */}
  ${'' /* .active.navbar{
    transform:translateY(0);
    opacity:1;
    visibility:visible;
  } */}
  ${'' /* .iconMenu2{   
    z-index:999;   
  } */}
}
@media(max-width:700px){
  .icon{
    font-size:1.5rem;
  }
}
`;