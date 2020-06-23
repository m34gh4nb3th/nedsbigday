import React, { useState } from 'react';
import { Input, Button, Alert, Row, Col, Radio } from 'antd';
import { getGuestByName } from '../../Database';
import { capitalize } from '../../utils';
import RingLoading from './RingLoading';
import { isMobile } from "react-device-detect";

const yesNoOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
];

const RsvpPage = () => {
    const [ enteredName, setEnteredName ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ thisGuest, setThisGuest ] = useState(null);
    const [ plusOneGuest, setPlusOneGuest ] = useState(null);

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
                            let plusOne = snap.data();
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

    return (
        <div>
            <div style={headerWrapper}>
                <h1>RSVP</h1>
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
                        {error && <Alert message={error} type="error" />}
                    </div>
                    </Col>
                </Row>
            }
            {thisGuest && !loading &&
                <Row justify="center">
                <Col md={{ span: 12 }} xs={{ span: 24}}>
                    <h2>Welcome, {capitalize(thisGuest.full_name)}{plusOneGuest ? ` and ${capitalize(plusOneGuest.full_name)}` : null}!</h2>
                    <h3 style={{marginBottom: '25px' }}>Will you be able to join us on this special occasion?</h3>
                    {!plusOneGuest && 
                        <Radio.Group options={yesNoOptions} onChange={null} value={thisGuest.attending_recpetion}/>
                    }
                    {plusOneGuest && 
                        <div>
                            <h3>
                                {capitalize(thisGuest.full_name)}
                                <Radio.Group options={yesNoOptions} onChange={null} value={thisGuest.attending_recpetion} style={{ marginLeft: '10px'}}/>
                            </h3>
                            <h3>
                                {capitalize(plusOneGuest.full_name)}
                                <Radio.Group options={yesNoOptions} onChange={null} value={plusOneGuest.attending_recpetion} style={{ marginLeft: '10px'}}/>
                            </h3>
                        </div>
                    }
                    <div style={{ textAlign: 'right'}}>
                        <Button
                            type="primary"
                            loading={loading}
                            onClick={searchForGuest}
                            
                        >
                            Continue
                        </Button>
                    </div>
                </Col>
                </Row>
            }
            {loading && !error && <RingLoading /> }
        </div>
    )
}

export default RsvpPage;