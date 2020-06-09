import React from 'react';
import { Row, Col, Card } from 'antd';
import {
    RightOutlined,
    DownOutlined
  } from '@ant-design/icons';


class RunList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        return(
            <div>
                <div style={{marginTop: '15px'}}>
                    <p style={{marginBottom: '0px', fontSize: 16}}><strong>Discovery Park</strong></p>
                    <p>Magnolia Neighborhood</p>
                    <img src="/DiscoveryPark.jpg" width="100%"></img>
                </div>
                <div style={{marginTop: '15px'}}>
                    <p style={{marginBottom: '0px', fontSize: 16}}><strong>Marsh Island</strong></p>
                    <p>University District</p>
                    <img src="/marsh-island.jpg" width="100%"></img>
                </div>
            </div>
        )
    }
}

export default RunList;