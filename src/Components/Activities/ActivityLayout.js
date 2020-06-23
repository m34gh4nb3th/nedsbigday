import React from 'react';
import { Row, Col } from 'antd';
import ActivityItem from './ActivityItem';

import { isMobile } from "react-device-detect";


class ActivityLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        const style = {
            row: {
                marginRight: isMobile ? '0px' : '25px', 
                marginLeft: isMobile ? '0px' : '25px', 
                marginBottom: '50px',
            },
            titleWrapper: {
                marginRight: this.props.titleSide === 'right' ? '50px': '0px', 
                marginLeft: this.props.titleSide === 'left' ? '50px': '0px', 
            },
            items: {
                textAlign: this.props.titleSide, 
                marginRight: this.props.titleSide === 'right' ? '20px': '0px', 
                marginLeft: this.props.titleSide === 'left' ? '20px': '0px',  
            },
            icon: {
                marginBottom: '0px'
            },
            title: {
                fontSize: isMobile ? '20px' : '30px',
            }
        }
        return(
            <Row gutter={8} style={style.row} align="middle">
                <Col md={{ span: 12 }} xs={{ span: 8 }} order={this.props.titleSide === 'left' ? 1 : 2} >
                    <div style={style.titleWrapper}>
                        <h2 style={style.icon}>{this.props.icon}</h2>
                        <h2 style={style.title}>{this.props.title}</h2>
                    </div>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 16 }} order={this.props.titleSide === 'left' ? 2 : 1}>
                    <div style={style.items}>
                        {this.props.activities && this.props.activities.map( item => 
                            <ActivityItem {...item} align={this.props.titleSide} restaurant={this.props.restaurant} key={item.title}/> 
                        )}
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ActivityLayout;
