import React from 'react';
import { Row, Col, Card } from 'antd';
import {
    RightOutlined,
    DownOutlined
  } from '@ant-design/icons';


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {

        return(
            <div>
                <div style={{marginTop: '15px'}}>
                    <p style={{marginBottom: '0px', fontSize: 16}}><strong>Day Trip to Bainbridge Island</strong></p>
                    <p>35 Minute ferry ride from downtown</p>
                    <img src="/Bainbridge.jpg" width="100%"></img>
                </div>
                <div style={{marginTop: '15px'}}>
                    <p style={{marginBottom: '0px', fontSize: 16}}><strong>Ballard Farmers Market</strong></p>
                    <p>Year round outdoor Sunday market</p>
                    <img src="/ballardmarket.jpg" width="100%"></img>
                </div>
                <div style={{marginTop: '15px'}}>
                    <p style={{marginBottom: '0px', fontSize: 16}}><strong>Ballard Consignment</strong></p>
                    <p>Eclectic consignment store</p>
                    <img src="/ballardmarket.jpg" width="100%"></img>
                </div>
            </div>
        )
    }
}

export default ToDoList;