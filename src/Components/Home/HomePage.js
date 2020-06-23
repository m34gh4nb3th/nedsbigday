import React from 'react';
import { Row, Col, Divider } from 'antd';
import EventInfo from './EventInfo';
import Date from './Date';
import eventData from './eventData';

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
            paddingTop: '50px', 
            paddingBottom: isMobile ? '50px' : '100px' 
        }
        
        return (
            <div style={pageStyle}>
                <h1 style={{ paddingBottom: isMobile ? '0px' : '25px' }}>Event Details</h1>
                {Object.keys(eventData).map( (date, index, arr) => (
                    <div key={date}>
                        <Row justify="center" gutter={4}>
                            <Col md={{ span: 4 }} xs={{ span: 24}}>
                                <Date day={date} month="August"/>
                            </Col>
                            <Col md={{ span: 18 }} xs={{ span: 24}} style={{ paddingLeft: '26px'}}>
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