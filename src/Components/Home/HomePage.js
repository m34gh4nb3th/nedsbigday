import React from 'react';
import { Row, Col, Divider, Modal, Button } from 'antd';
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
        this.state = {showModal: false};
    }

    componentDidMount() {
        this.setState({showModal: true})
    }

    

    render() {

        const pageStyle = {
            paddingLeft: isMobile ? '10px' : '100px', 
            paddingRight: isMobile ? '10px' : '100px', 
            paddingTop: isMobile ? '20px' : '50px', 
            paddingBottom: isMobile ? '50px' : '100px' 
        }

        const handleCancel = () => {
            this.setState({showModal: false})
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
                                    />
                                ))}
                            </Col>
                        </Row>
                        {index < (arr.length - 1) && isBrowser && <Divider/> }
                    </div>
                ))}
                <Modal
                title={<h2 style={{paddingTop: 10}}>Change of Plans</h2>}
                visible={this.state.showModal}
                onOk={handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={handleCancel}>
                    Okay
                    </Button>,
                ]}
                >
                    <p>
                        After careful consideration, we have come to the difficult decision to downsize the wedding. 
                        We are not confident that by next August we will be able to safely host the wedding as we originally imagined it. 
                        We truly wish every one of you could be there with us to celebrate. We will certainly be thinking of you all 
                        and hope we can celebrate together in the near future!
                    </p>
                    <p>
                        We will be sending out formal notice in the next month or so but we want guests to know as soon as possible 
                        in case anyone is looking into making travel plans.
                    </p>
                </Modal>
            </div>
        )
    }
}

export default HomePage;