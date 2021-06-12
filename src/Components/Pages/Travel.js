import React from 'react';
import { Card, Row, Col, Popover } from 'antd';
import { isMobile } from "react-device-detect";

const style = {
    card: {
        margin: '20px',
    },
    page: {
        paddingLeft: isMobile ? '10px' : '100px', 
        paddingRight: isMobile ? '10px' : '100px', 
        paddingTop: '50px',
        textAlign: 'center',
    },
    category: {
        fontSize: isMobile ? '20px' : '30px',
    },
    code: {
        fontSize: '16px',
        fontFamily: 'Montserrat', 
        color: '#86b59f', 
        marginBottom: '-10px',
    },
    popover: {
        width: isMobile ? '90%' : '40%',
    }
}

const iconSize = isMobile ? "50px" : "100px";
const popContent = 'Please do not hesitate to reach out to us if you are looking for other invited/attending guests! We would be more than happy to help coordinate '
                    +' flights, airport transportation, and/or shared accommodations to make this trip as easy (and fun) as possible!';

const Travel = () =>  {
    return(
        <div style={style.page}>
            <h1 style={{ paddingBottom: '25px' }}>TRAVEL & ACCOMMODATIONS</h1>
            <Popover content={popContent} trigger="click" overlayStyle={style.popover}>
                <a>Looking to coordinate with other guests?</a>
            </Popover>
            <Card style={style.card}>
                <Row>
                    <Col md={{ span: 8 }} xs={{ span: 24 }} style={{textAlign: 'center'}}>
                        <img src="/airplane-icon.png" width={iconSize} alt=""/>
                        <h2 style={style.category}>Flights</h2>
                    </Col>
                    <Col md={{ span: 16 }} xs={{ span: 24 }} style={{textAlign: 'left'}}>
                        <p>The closest airport to Seattle is the <a href="https://www.portseattle.org/sea-tac" target="_blank">Seattle-Tacoma International Airport</a>.</p>
                        <p>There is a <a href="https://www.portseattle.org/page/public-transit-link-light-rail" target="_blank">light rail train</a> that 
                        runs between the airport and downtown if you have time and are looking to save some money.</p>
                        <p>However, taxis and ride share are probably quicker options.</p>
                    </Col>
                </Row>
            </Card>
            <Card style={style.card}>
                <Row gutter={16}>
                    <Col md={{ span: 8 }} xs={{ span: 24 }} style={{textAlign: 'center'}}>
                        <img src="/bed-icon.png" width={iconSize} alt=""/>
                        <h2 style={style.category}>Hotel</h2>
                    </Col>
                    <Col md={{ span: 16 }} xs={{ span: 24 }} style={{textAlign: 'left'}}>
                        <p style={{marginBottom: 0}}>We have arranged a room block at <a href="https://www.thecharterseattle.com/" target="_blank">The Charter Hotel</a> in downtown Seattle.</p>
                        <br/><p><strong>Details:</strong></p>
                        <li>
                            <ul>Arrival date: August 6th, 2021</ul>
                            <ul>Departure date: August 8th, 2021</ul>
                            <ul><i>Rooms must be reserved by <strong>June 14, 2021</strong> to be eligible for the reduced room rate</i></ul>
                        </li>
                        <p><strong>Call: </strong> Reserve your room over the phone by calling (206) 256-7500 and mentioning you are part of the "Crowley/Thomas Wedding Room Block".</p>
                        <p><strong>Online: </strong> <a href="http://group.curiocollection.com/qzcam" target="_blank">Click here</a> to reserve your room online.</p>
                        <p>If you are looking for alternative accommodations, there are plenty of other hotels and Airbnbs in the area. Don't hesitate to reach out to us for recommendations!</p>                        
                    </Col>
                </Row>
            </Card>
            <Card style={style.card}>
                <Row>
                    <Col md={{ span: 8 }} xs={{ span: 24 }} style={{textAlign: 'center'}}>
                        <img src="/public-transportation-icon.png" width={iconSize} alt=""/>
                        <h2 style={style.category}>Other</h2>
                    </Col>
                    <Col md={{ span: 16 }} xs={{ span: 24 }} style={{textAlign: 'left'}}>
                        <p>We have coordinated shuttles for day-of transportation between the hotel and the venues. <a href="/transportation" style={{textDecoration: 'underline'}}>Click here for a day-of transportation timeline </a> </p>
                        <p>There is parking available for $55 per day at the Charter Hotel should you choose to rent a car or drive.</p>
                        <p>The hotel is conveniently located downtown so you certainly do not need a car to get around and explore the city.</p>
                        <p>The city has great bus system and a couple (electric) bike rental companies if you want to leave the downtown area.</p>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Travel;