import React from 'react';
import { Card, Row, Col } from 'antd';
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
        fontSize: isMobile ? '20px' : '30px'
    }
}

const iconSize = isMobile ? "50px" : "100px";

class Travel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    

    render() {
        return(
            <div style={style.page}>
                <h1 style={{ paddingBottom: '25px' }}>TRAVEL & ACCOMMODATIONS</h1>
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
                            <p>The wedding is being held at the <a href="https://www.edgewaterhotel.com/" target="_blank">Edgewater Hotel</a>.</p>
                            <p>There are plenty of other hotels as well as Airbnb options in the area.</p>
                            <br/><br/>
                            <div style={{textAlign: 'center'}}><i>More details to come</i></div>
                            
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
                            <p>There is parking available (for a fee) at the Edgewater Hotel should you chose to rent a car.</p>
                            <p>The hotel is conveniently located downtown so you certainly do not need a car to get around and explore the city.</p>
                            <p>The city has great bus system and a couple (electric) bike rental companies if you want to leave the downtown area.</p>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default Travel;