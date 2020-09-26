import React from 'react';
import { isMobile } from "react-device-detect";
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import NavBar from './NavBar';

const style = {
    image: {
        display: 'block',  
        marginLeft: 'auto',  
        marginRight: 'auto',  
        width: '80%',
    }
}
const Header = () => {
    return (
        <div>
            {isMobile && <MobileHeader />}
            {!isMobile && <DesktopHeader />}
            <img src="/eucalyptus.png" alt="background" style={style.image}/>
            {!isMobile && <NavBar />}
        </div>
    )
}

export default Header;