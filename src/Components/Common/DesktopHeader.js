import React from 'react';
import { Divider } from 'antd';
import { isMobile } from "react-device-detect";

const style = {
    heading: {
        marginBottom: '-20px', 
        fontSize: isMobile ? 54 : 64, 
        fontFamily: 'Poppins-light', 
        color: '#51755b'
    },
    date: {
        marginBottom: '-50px', 
        zIndex: 10,
    },
}

const DesktopHeader = () => {
    return (
        <div>
            <h1 style={style.heading}>M E A G H A N & I A N</h1>
            <h3 style={style.date}>August 7th, 2021 <Divider type="vertical" /> Seattle, WA</h3>
        </div>
    )
    
}

export default DesktopHeader;