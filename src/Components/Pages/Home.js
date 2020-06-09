import React from 'react';
import { Row, Col, Divider } from 'antd';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ paddingLeft: '100px', paddingRight: '100px', paddingTop: '50px', paddingBottom: '100px' }}>
                <h2 style={{textAlign: 'center', fontFamily: 'AmaticSC', fontSize: 42, paddingBottom: '25px'}}>Event Details</h2>
                <Row justify="center" gutter={4}>
                    <Col span={4}>
                        <div style={{ textAlign: 'center'}}>
                            <p style={{ fontFamily: 'Montserrat', fontSize: 18, color: '#1DA57A', marginBottom: '-10px'}}><span style={{fontSize: 36}}>6</span>th</p>
                            <p style={{color: "#cccccc"}}>August</p>
                        </div>
                    </Col>
                    <Col span={18} style={{ paddingLeft: '26px'}}>
                        <div style={{ textAlign: 'center', color: '#808080', fontWeight: 'bold', fontSize: 16}}>Rehersal Dinner</div>
                        <div style={{ textAlign: 'center'}}>
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Who?</span> Wedding Party & Imediate Family 
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Where?</span> 
                            <a href="https://www.vons1000spirits.com/">Von's 1000SPIRITS</a> 
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>When?</span> 6:00PM - 8:00PM
                        </div>
                        <br/>
                        <div style={{ textAlign: 'center', color: '#808080', fontWeight: 'bold', fontSize: 16}}>Welcome Happy Hour</div>
                        <div style={{ textAlign: 'center'}}>
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Who?</span> Everyone! 
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Where?</span> 
                            <a href="https://www.vons1000spirits.com/">Von's 1000SPIRITS</a>   
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>When?</span> 8:00PM - 10:00PM
                        </div>
                    </Col>
                </Row>
                <Divider />
                <Row justify="center" gutter={4}>
                    <Col span={4}>
                        <div style={{ textAlign: 'center'}}>
                            <p style={{ fontFamily: 'Montserrat', fontSize: 18, color: '#1DA57A', marginBottom: '-10px'}}><span style={{fontSize: 36}}>7</span>th</p>
                            <p style={{color: "#cccccc"}}>August</p>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div style={{ textAlign: 'center', color: '#808080', fontWeight: 'bold', fontSize: 16}}>
                            Private Ceremony<br/>
                            <small><i>Something about why we want a small private ceremony</i></small>
                        </div>
                        <div style={{ textAlign: 'center'}}>
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Who?</span> Wedding Party & Imediate Family 
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Where?</span> 
                            Parson's Garden (Queen Anne)
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>When?</span> 4:00PM - 5:00PM
                        </div>
                        <br/>
                        <div style={{ textAlign: 'center', color: '#808080', fontWeight: 'bold', fontSize: 16}}>Cocktail Hour and Reception</div>
                        <div style={{ textAlign: 'center'}}>
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Who?</span> Everyone! 
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Where?</span> 
                            <a href="https://www.thecorsonbuilding.com/">The Corson Building</a>   
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>When?</span> 6:00PM - 11:00PM
                        </div>
                        <br/>
                        <div style={{ textAlign: 'center', color: '#808080', fontWeight: 'bold', fontSize: 16}}>After Party?</div>
                        <div style={{ textAlign: 'center'}}>
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Who?</span> Everyone! 
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Where?</span> 
                            TBD...   
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>When?</span> 11:00PM - ?
                        </div>
                    </Col>
                </Row>
                <Divider />
                <Row justify="center" gutter={4}>
                    <Col span={4}>
                        <div style={{ textAlign: 'center'}}>
                            <p style={{ fontFamily: 'Montserrat', fontSize: 18, color: '#1DA57A', marginBottom: '-10px'}}><span style={{fontSize: 36}}>8</span>th</p>
                            <p style={{color: "#cccccc"}}>August</p>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div style={{ textAlign: 'center', color: '#808080', fontWeight: 'bold', fontSize: 16 }}>Farewell Brunch</div>
                        <div style={{ textAlign: 'center'}}>
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Who?</span> Everyone! 
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Where?</span> 
                            Some Hotel  
                            <Divider type="vertical" />
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>When?</span> 9:00AM - 11:00AM
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;