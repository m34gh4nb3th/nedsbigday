import React from 'react';
import { Row, Col, Divider } from 'antd';
import EventInfo from './EventInfo';
import Date from './Date';
import eventData from './eventData';
import {CarOutlined} from '@ant-design/icons'

import {
    isBrowser,
    isMobile
} from "react-device-detect";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const pageStyle = {
            paddingLeft: isMobile ? '10px' : '100px', 
            paddingRight: isMobile ? '10px' : '100px', 
            paddingTop: isMobile ? '20px' : '50px', 
            paddingBottom: isMobile ? '50px' : '100px' 
        }
        
        return (
            <div style={pageStyle}>
                <h1 style={{ paddingBottom: isMobile ? '0px' : '25px' }}>EVENT DETAILS</h1>
                {Object.keys(eventData).map( (date, index, arr) => (
                    <div key={date}>
                        <Row justify="center" gutter={4}>
                            <Col md={{ span: 3 }} xs={{ span: 24}}>
                                <Date day={date} month="August"/>
                            </Col>
                            <Col md={{ span: 19 }} xs={{ span: 24}} style={{ paddingLeft: '26px'}}>
                                {date == 7 && (
                                    <div style={{width: '100%', display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '15px 0px', border: '1px solid #86b59f', borderRadius: '5px', cursor: 'pointer'}}>

                                        <a href="/transportation" style={{textAlign: 'center', width: '100%', fontFamily: 'Montserrat', color: '#86b59f', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': {opacity: 0.5}}}>
                                            <div style={{marginLeft: '15px', marginRight: '15px'}}><CarOutlined twoToneColor="#86b59f" style={{fontSize: 30}}/></div>
                                            Transportation will be provided between events, click here for details
                                        </a>
                                    </div>
                                )}
                                {eventData[date] && eventData[date].map( event => (
                                    <EventInfo 
                                        eventName = {event.eventName}
                                        private = {event.private}
                                        extra = {event.extra || null}
                                        locationName = {event.locationName}
                                        locationLink = {event.locationLink}
                                        time = {event.time}
                                        attire = {event.attire}
                                        key={event.eventName}
                                        detailsTbd={event.detailsTbd}
                                        gap={event.gap}
                                    />
                                ))}
                            </Col>
                        </Row>
                        {index < (arr.length - 1) && isBrowser && <Divider/> }
                    </div>
                ))}
            </div>
        )
    }
}

export default HomePage;