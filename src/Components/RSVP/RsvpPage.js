import React, { useState } from 'react';
import { Input, Button, Alert, Row, Col, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { getGuestByName, addIdToRecord } from '../../Database';
import { capitalize } from '../../utils';
import RingLoading from './RingLoading';
import WeddingRSVP from './WeddingRSVP';
import ContactInfo from './ContactInfo';
import { isMobile } from "react-device-detect";

const { Panel } = Collapse;



const RsvpPage = () => {
    const [ enteredName, setEnteredName ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ thisGuest, setThisGuest ] = useState(null);
    const [ plusOneGuest, setPlusOneGuest ] = useState(null);

    // //arrow function, things to decide when to run function
    // useEffect( () => {
    //     //do something based on updated props
    //     setEnteredName(props.test);
    // },
    // [props.test, props.title] );
    // //an exmaple using state
    // useEffect( () => {
    //     //do something based on updated props
    //     setLoading(true);
    // },
    // [enteredName] );

    const searchForGuest = () => {
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
        paddingTop: '50px', 
        paddingBottom: '50px', 
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
                <h1>RSVP</h1>
                <h1><small>Please RSVP by February 7th, 2021</small></h1>
            </div>
            {!thisGuest &&
                <Row justify="center">
                    <Col md={{ span: 12 }} xs={{ span: 24}}>
                    <div style={{textAlign: 'center', marginBottom: '25px'}}>
                        <h3 style={{marginBottom: '0px' }}>Please enter your full name as it appears on your invitation.</h3> 
                        <small >If there are multiple names on your invitation you may enter either</small>
                    </div>
                    <div style={{textAlign: 'center'}}>
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
                                style={!disabled ? {color: '#1DA57A', fontSize: '18px'} : {color: '#9bc2b6', fontSize: '18px'}}/>}
                            >
                            <Panel header={<h4>Wedding Day</h4>} key="1" style={{ borderBottom: '0px'}}>
                                <WeddingRSVP 
                                thisGuest={thisGuest} 
                                plusOneGuest={plusOneGuest} 
                                setPlusOneGuest={setPlusOneGuest}
                                setThisGuest={setThisGuest}/>   
                            </Panel>
                            <Panel header={<h4 style={{color: '#9bc2b6'}}>Other Events <small>(coming soon)</small></h4>} key="2" disabled style={{ borderBottom: '0px'}}>
                                <ContactInfo/>
                            </Panel>
                            <Panel header={<h4>Contact Info</h4>} key="3" style={{ borderBottom: '0px'}}>
                                <ContactInfo 
                                thisGuest={thisGuest} 
                                plusOneGuest={plusOneGuest}
                                setThisGuest={setThisGuest} />
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