import React from 'react';
import { Divider } from 'antd';
import { isMobile } from "react-device-detect";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1 style={{ marginBottom: '-20px', fontSize: 64 }}>Meaghan & Ian</h1>
                <h3 style={{ marginBottom: isMobile ? '0px' : '-50px', zIndex: 10 }}>August 7th, 2021 <Divider type="vertical" /> Seattle, WA</h3>
                <img src="/eucalyptus.png" alt="background" style={{ display: 'block',  marginLeft: 'auto',  marginRight: 'auto',  width: '80%'}}/>
            </div>
        )
    }
}

export default Header;