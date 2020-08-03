import React, { Fragment } from 'react';
import { Divider } from 'antd';
import { isMobile } from "react-device-detect";

const style = {
    heading: {
        marginBottom: '-20px', 
        fontSize: isMobile ? 54 : 64, 
        fontFamily: 'Poppins-light', 
        color: '#51755b'
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {!isMobile && 
                    <h1 style={style.heading}>M E A G H A N & I A N</h1>
                }
                {isMobile && 
                    <Fragment>
                        <h1 style={style.heading}>M E A G H A N</h1>
                        <h1 style={{...style.heading, marginTop: '-30px', marginBottom: '-10px'}}>& I A N</h1>
                    </Fragment>
                }
                
                <h3 style={{ marginBottom: isMobile ? '0px' : '-50px', zIndex: 10 }}>August 7th, 2021 <Divider type="vertical" /> Seattle, WA</h3>
                <img src="/eucalyptus.png" alt="background" style={{ display: 'block',  marginLeft: 'auto',  marginRight: 'auto',  width: '80%'}}/>
            </div>
        )
    }
}

export default Header;