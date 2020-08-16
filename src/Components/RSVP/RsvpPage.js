import React, { useState } from 'react';
import { Input, Button, Alert, Row, Col, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { getGuestByName, addIdToRecord } from '../../Database';
import { capitalize } from '../../utils';
import RingLoading from './RingLoading';
import WeddingRSVP from './WeddingRSVP';
import ContactInfo from './ContactInfo';
import SongRequests from './SongRequests';
import { isMobile } from "react-device-detect";

const { Panel } = Collapse;



const RsvpPage = () => {
    const [ enteredName, setEnteredName ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ thisGuest, setThisGuest ] = useState(null);
    const [ plusOneGuest, setPlusOneGuest ] = useState(null);

    const searchForGuest = (e) => {
        if (e) e.preventDefault();
        setLoading(!loading);
        setError(null);
        if (!enteredName) {
            setError('Please enter a name');
            setLoading(false);
        } else {
            getGuestByName(enteredName).then(res => {
                if (res.length > 0) {
                    setThisGuest(res[0]);
                    if (res[0].known_guest) {
                        res[0].known_guest.get().then(snap => {
                            let plusOne = addIdToRecord(snap);
                            setPlusOneGuest(plusOne);
                            setLoading(false);
                            setError(null)
                        })
                    } else {
                        //no need to look up anyone else so let's move on
                        setLoading(false);
                    }
                } else {
                    setError('We can\'t find that name. Please make sure it matches what is on your invitation exactly');
                }
            })
        }
    }

    const headerWrapper = {
        paddingLeft: isMobile ? '10px' : '100px', 
        paddingRight: isMobile ? '10px' : '100px', 
        paddingBottom: '10px',
    }

    const pageStyle = {
        paddingLeft: isMobile ? '10px' : '100px', 
        paddingRight: isMobile ? '10px' : '100px', 
        paddingTop: '50px',
        paddingBottom: isMobile ? '50px' : '100px' 
    }

    return (
        <div style={pageStyle}>
            <div style={headerWrapper}>
                <h1 style={{marginBottom: '0px'}}>RSVP</h1>
                <h1 style={{ fontSize: '18px', marginBottom: '0px'}}>By <strong>May 7th, 2021</strong> -- But if you know sooner, please let us know!</h1>
            </div>
            {!thisGuest &&
                <Row justify="center" style={{marginTop: '50px'}}>
                    <Col md={{ span: 12 }} xs={{ span: 24}}>
                    <div style={{marginBottom: '25px'}}>
                        <h3 style={{marginBottom: '0px', textAlign: 'center' }}>Please enter your first and last name as they appear on your invitation</h3> <br/>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <ul>
                                <li>If there are two names on your invitation you may enter either</li>
                                <li>If there are more than two names you may need to enter them separately</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <form onSubmit={searchForGuest}>
                        <Input
                            placeholder="Your Full Name"
                            value={enteredName} 
                            onChange={(e) => setEnteredName(e.target.value)}
                            style={{marginBottom: '25px', maxWidth: '330px'}}
                        />
                        <Button
                            type="primary"
                            onClick={searchForGuest}
                        >
                            Continue
                        </Button>
                        {error && <Alert message={error} type="error" style={{marginTop: '20px'}}/>}
                        </form>
                    </div>
                    </Col>
                </Row>
            }
            {thisGuest && !loading &&
                <Row justify="center">
                    <Col md={{ span: 14 }} xs={{ span: 24}}>
                        <h2>Welcome, {capitalize(thisGuest.full_name)}{plusOneGuest ? ` and ${capitalize(plusOneGuest.full_name)}` : null}!</h2>
                        <Collapse
                            bordered={false}
                            style={{background: 'transparent'}}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive, disabled }) => 
                                <CaretRightOutlined 
                                rotate={isActive ? 90 : 0} 
                                style={!disabled ? {color: '#86b59f', fontSize: '18px'} : {color: '#bcd4c9', fontSize: '18px'}}/>}
                            >
                            <Panel header={<h4>Wedding Day</h4>} key="1" style={{ borderBottom: '0px'}}>
                                <WeddingRSVP 
                                thisGuest={thisGuest} 
                                plusOneGuest={plusOneGuest} 
                                setPlusOneGuest={setPlusOneGuest}
                                setThisGuest={setThisGuest}/>   
                            </Panel>
                            <Panel header={<h4 style={{color: '#bcd4c9'}}>Other Events <small>(coming soon)</small></h4>} key="2" disabled style={{ borderBottom: '0px'}}>
                                <ContactInfo/>
                            </Panel>
                            <Panel header={<h4>Contact Info</h4>} key="3" style={{ borderBottom: '0px'}}>
                                <ContactInfo 
                                thisGuest={thisGuest} 
                                plusOneGuest={plusOneGuest}
                                setThisGuest={setThisGuest} />
                            </Panel>
                            <Panel header={<h4>Song Requests</h4>} key="4" style={{ borderBottom: '0px'}}>
                                <SongRequests
                                thisGuest={thisGuest} 
                                plusOneGuest={plusOneGuest}
                                setThisGuest={setThisGuest}/>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row> 
            }
            {loading && !error && <RingLoading /> }
        </div>
    )
}

export default RsvpPage;