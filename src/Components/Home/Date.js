import React from 'react';
import {Divider} from 'antd';
import {isMobile} from "react-device-detect";

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const date = <div style={{ textAlign: 'center'}}>
                        <p style={{ fontFamily: 'Montserrat', fontSize: 30, color: '#86b59f', marginBottom: '-10px'}}><span style={{fontSize: 36}}>{this.props.day}</span>th</p>
                        <p style={{color: "#cccccc"}}>{this.props.month}</p>
                    </div>

        if (isMobile) return (<Divider orientation="left">{date}</Divider>)
        else return (<div>{date}</div>)
    }
}

export default Date;