import  React, {useState,useContext,useEffect,useRef} from 'react';
import "react-multi-carousel/lib/styles.css";

const AppContext = React.createContext();
const AppProvider=({children})=>{

    const [theme, setTheme] = useState('light-theme');
    const [changeThemeIcon, setChangeThemeIcon] = useState(true);
    const [changeMenuIcon, setChangeMenuIcon] = useState(true);
    const [responsiveMenu, setResponsiveMenu] = useState(false);
    const [closeIcon, setCloseICon] = useState(true);
    const [changeUserIcon, setChangeUserIcon] = useState(true);
    const [hoveredItem, setHoveredItem] = useState(null);
    
    // Toggle ThemeColor   ===========
    const ToggleMode=()=>{
        theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme')
        setChangeThemeIcon(!changeThemeIcon);
    }
    // Toggle Menu   ===========
    const ToggleMenu=()=>{
        setChangeMenuIcon(!changeMenuIcon);
        setResponsiveMenu(!responsiveMenu);
    }
    // Toggle UserIcon   ===========
    const ToggleUser=()=>{
        setChangeUserIcon(!changeUserIcon);
    }    
    const HandleCloseBtn=()=>{
        setCloseICon(!closeIcon);
    }
    // handle mouseEnter & mouseLeave  ===========
    const HandledMouseEnter=(item)=>{
        setHoveredItem(item);
    }
    const HandledMouseLeave=()=>{
        setHoveredItem(null);
    }
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
    const placeholderRef = useRef(null);
    useEffect(()=>{
        document.body.className =  theme;
        // setData(data);
        const observer = new IntersectionObserver((entries)=>{
            const ent = entries[0];
            console.log(ent);
            setIsSticky(!ent.isIntersecting);

        } ,{root:null, threshold:0}
        );
        // observer.observe(herosection);
        const placeholder = placeholderRef.current;
        // console.log(placeholder);

        if (placeholder) {
          observer.observe(placeholder);
        }    
        return () => {
          if (placeholder) {
            observer.unobserve(placeholder);
          }
        };
      },[theme], [placeholderRef]);

    
    // ============ filter menu =============== 
    const [showFilter,setShowFilter] = useState(true);
    const [alignCard,setAlignCard] = useState(false);
    
    const ToggleFilterIcon=()=>{
        setShowFilter(!showFilter);
        setAlignCard(!alignCard);
    }  
    
    // ============ sile style =============== 
    const responsive = {
        desktop: {
          breakpoint: { max: 2000, min: 998 },
          items: 1,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 998, min: 497 },
          items: 1,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 497, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

    return(
        <AppContext.Provider value = 
        {{ ToggleMode,changeThemeIcon,ToggleMenu,changeMenuIcon,ToggleUser,changeUserIcon,
           ToggleFilterIcon,showFilter,alignCard,responsiveMenu,
           HandleCloseBtn,closeIcon,hoveredItem, setHoveredItem,HandledMouseEnter,HandledMouseLeave,
           headerRef, placeholderRef, isSticky,responsive}}>
            {children}
        </AppContext.Provider>
    );
}
const useGlobalContext=()=>{
    return useContext(AppContext);
}
export { AppContext,AppProvider,useGlobalContext }