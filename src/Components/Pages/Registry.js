import React from 'react';
import { Button, Row, Col, Timeline } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { MobileView, BrowserView, isMobile } from "react-device-detect";

const style = {
    container: {
        position: 'relative',  
        textAlign: 'center', 
    },
    header: { 
        position: 'absolute',  
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        color: 'white',
    },
    miniHeader: { 
        position: 'absolute',  
        left: '5%', 
        color: 'white',
        bottom: '0'
    },
    image: { 
        borderRadius: '15px',
    },
    category: {
        fontSize: isMobile ? '20px' : '30px',
    },
}



class Registry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const headerWrapper = {
            paddingLeft: isMobile ? '10px' : '100px', 
            paddingRight: isMobile ? '10px' : '100px', 
            paddingTop: '50px', 
            paddingBottom: '50px', 
        }

        return(
            <div style={headerWrapper}>
                <h1 style={{ paddingBottom: '25px' }}>REGISTRY</h1>
                <Row align="center">
                    <Col md={{ span: 16}} xs={{ span: 24}} style={{ textAlign: 'center'}}>
                        <a target="_blank" href="https://registry.theknot.com/meaghan-crowley-ian-thomas-august-2021-wa/40865926">
                            <Button type="primary" size="large">Honeymoon Fund</Button>
                        </a>
                    </Col>
                </Row>
                <BrowserView>
                    <Row align="center">
                        <Col md={{ span: 24}} xs={{ span: 24}} style={{ textAlign: 'center', paddingTop: '100px'}}>
                        <h2 style={style.category}>Mini-Moon</h2>
                        <Row justify="center">
                            <Col md={{ span: 12}} xs={{ span: 12}}>
                                <div style={{...style.container}}>
                                    <h2 style={{...style.miniHeader, fontSize: '48px'}}>Santa Barbara</h2>
                                    <img src="/santabarbara.jpg" width="100%" alt="" style={style.image}></img>
                                </div>
                            </Col>
                            </Row>
                        </Col>
                        <Col md={{ span: 24}} xs={{ span: 24}} style={{ textAlign: 'center', paddingTop: '100px'}}>
                        <h2 style={style.category}>Later-Moon</h2>
                        <Timeline mode="alternate">
                                <Timeline.Item dot={<StarOutlined style={{ fontSize: '24px'}}/>}>
                                    <div style={{...style.container, marginLeft: '25px'}}>
                                        <h2 style={{...style.header, top: '15%', fontSize: '48px'}}>Greece</h2>
                                        <img src="/Greece.jpg" width="100%" alt="" style={style.image}></img>
                                    </div>
                                </Timeline.Item>
                                <Timeline.Item dot={<StarOutlined style={{ fontSize: '24px'}}/>}>
                                    <div style={{...style.container, marginRight: '25px'}}>
                                        <h2 style={{...style.header, bottom: '15px', fontSize: '48px'}}>France</h2>
                                        <img src="/France.jpg" width="100%" alt="" style={style.image}></img>
                                    </div>
                                </Timeline.Item>
                                <Timeline.Item dot={<StarOutlined style={{ fontSize: '24px'}}/>}>
                                    <div style={{...style.container, marginLeft: '25px'}}>
                                        <h2 style={{...style.header, top: '15%', fontSize: '40px'}}>Switzerland</h2>
                                        <img src="/Switzerland.jpg" width="100%" alt="" style={style.image}></img>
                                    </div>
                                </Timeline.Item>
                            </Timeline>
                        </Col>
                    </Row>
                </BrowserView>
                <MobileView>
                    <Row align="center" gutter={16} style={{paddingTop: '50px'}}>
                    <h2 style={style.category}>Mini-Moon</h2>
                    <Col xs={{ span: 24}} style={{ textAlign: 'center', paddingTop: '15px', paddingBottom: '15px'}}>
                            <div style={{...style.container}}>
                                <h2 style={{...style.miniHeader, fontSize: '24px'}}>Santa Barbara</h2>
                                <img src="/santabarbara.jpg" width="100%" alt="" style={style.image}></img>
                            </div>
                        </Col>
                    <h2 style={style.category}>Later-Moon</h2>
                        <Col xs={{ span: 24}} style={{ textAlign: 'center', paddingTop: '15px'}}>
                            <div style={{...style.container}}>
                                <h2 style={{...style.header, top: '15%', fontSize: '24px'}}>Greece</h2>
                                <img src="/Greece.jpg" width="100%" alt="" style={style.image}></img>
                            </div>
                        </Col>
                        <Col xs={{ span: 24}} style={{ textAlign: 'center', paddingTop: '15px'}}>
                            <div style={{...style.container}}>
                                <h2 style={{...style.header, bottom: '15px', fontSize: '24px'}}>France</h2>
                                <img src="/France.jpg" width="100%" alt="" style={style.image}></img>
                            </div>
                        </Col>
                        <Col xs={{ span: 24}} style={{ textAlign: 'center', paddingTop: '15px'}}>
                            <div style={{...style.container}}>
                                <h2 style={{...style.header, top: '15%', fontSize: '20px'}}>Switzerland</h2>
                                <img src="/Switzerland.jpg" width="100%" alt="" style={style.image}></img>
                            </div>
                        </Col>
                    </Row>
                </MobileView>
            </div>
        )
    }
}

export default Registry;