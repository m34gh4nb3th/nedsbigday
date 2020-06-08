import React from 'react';
import { Divider } from 'antd';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h2 style={{ fontFamily: 'AmaticSC', textAlign: 'center', fontSize: 64, marginBottom: '-20px' }}>Meaghan & Ian</h2>
                <h3 style={{textAlign: 'center', color: "rgba(0, 0, 0, 0.65)" , marginBottom: '-50px', zIndex: 10}}>August 7th, 2021 <Divider type="vertical" /> Seattle, WA</h3>
                <img src="/eucalyptus.png" alt="background" style={{ display: 'block',  marginLeft: 'auto',  marginRight: 'auto',  width: '80%'}}/>
            </div>
        )
    }
}

export default Header;