import React, { useState } from 'react';
import { capitalize } from '../../utils';
import { Radio, Card, Row, Col, Button, Alert, notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import RingLoading from './RingLoading';
import { updateGuest } from '../../Database';
import firestore from '../../Database/firestoreConfig';

const db = firestore.firestore();

const yesNoOptions = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
];

const OtherRSVP = (props) => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ dinResp, setDinResp ] = useState(props.thisGuest.attending_rehearsal_dinner);
    const [ dinRespPlusOne, setDinRespPlusOne ] = useState(props.plusOneGuest ? props.plusOneGuest.attending_rehearsal_dinner : null);
    const [ happyResp, setHappyResp ] = useState(props.thisGuest.attending_happy_hour);
    const [ happyRespPlusOne, setHappyRespPlusOne ] = useState(props.plusOneGuest ? props.plusOneGuest.attending_happy_hour : null);
    const [ brunchResp, setBrunchResp ] = useState(props.thisGuest.attending_farewell_brunch);
    const [ brunchRespPlusOne, setBrunchRespPlusOne ] = useState(props.plusOneGuest ? props.plusOneGuest.attending_farewell_brunch : null);

    // const missingValues = () => {
    //     if (((props.plusOneGuest || plusOneName) && ( !recRespPlusOne))
    //         || ( !recResp )) return true;
    //     else return false;
    // }
    
    const handleUpdateGuests = (guests) => {
        //first guest in array is always primary
        //second is the plus one if there is one
        guests.forEach( (guest, index, array) => {
            let gId = guest.id;
            delete guest.id;
            updateGuest(gId, guest).then( good => {
                if (good) {
                    if (index === 0) props.setThisGuest(guest);
                    else props.setPlusOneGuest(guest);
                    if (index === array.length - 1) {
                        setLoading(false);
                        notification.open({
                            message: 'Thanks!',
                            description:'Your RSVP has been successfully submitted. If you need to change your response please reach out to us directly.',
                        });
                    }
                }
            }).catch(err => {
                console.log('err',err);
                setLoading(false);
                setError(err.toString());
            })
        })
    }

    // const handleNewGuest = () => {
    //     //new guest object
    //     let newGuest = {
    //         full_name: plusOneName.toLowerCase(),
    //         unknown_plus_one: false,
    //         known_guest: db.doc(`/guests/${props.thisGuest.id}`),
    //         attending_reception: recRespPlusOne,
    //     }
    //     //send object to database
    //     createGuest(newGuest).then(guestId => {
    //         //query new guest and update state with new guest
    //         getGuestById(guestId).then(res => {
    //             if (res) props.setPlusOneGuest(res);
    //         }).catch(err => {
    //             console.log('err',err);
    //         });
    //         let updateGuest = {
    //             ...props.thisGuest,
    //             attending_reception: recResp,
    //             unknown_plus_one: false,
    //             known_guest: db.doc(`/guests/${guestId}`)
    //         }
    //         //update original guest RSVP and plus one info
    //         handleUpdateGuests([updateGuest]);
    //     }).catch(err => {
    //         console.log('err',err);
    //         setLoading(false);
    //         setError(err.toString());
    //     });
    // }

    const submitRsvp = () => {
        setLoading(true);
        setError(null);
        //check for errors
        // const addingGuest = props.thisGuest.unknown_plus_one && addPlusOne;
        // if (addingGuest && (!plusOneName || !plusOneName.trim())) {
        //     setError('Please enter the first and last name of your plus one or use the "X" button to remove them.');
        //     setLoading(false);
        // } else if (missingValues()) {
        //     setError('Please RSVP to all wedding events.');
        //     setLoading(false);
        // } else {
            //first need to add new guest
            
                let guests = [];
                let updateGuest = {
                    ...props.thisGuest,
                    attending_rehearsal_dinner: dinResp,
                    attending_happy_hour: happyResp,
                    attending_farewell_brunch: brunchResp,
                }
                //remove id field before sending to database
                guests.push(updateGuest);
                // add the plus one guest object if there is one
                if (props.plusOneGuest) {
                    let updatePlusOne = {
                        ...props.plusOneGuest,
                        attending_rehearsal_dinner: dinRespPlusOne,
                        attending_happy_hour: happyRespPlusOne,
                        attending_farewell_brunch: brunchRespPlusOne,
                    }
                    guests.push(updatePlusOne);
                }
                // send the news to update to the database
                handleUpdateGuests(guests);
            
        //}
        
    }

    const cardStyle = {borderColor: '#9bc2b6', margin: '20px',backgroundColor: 'transparent' }
    return (
        <div>
            <h3>See home page for event times and details</h3>
            {error && <Alert message={error} type="error"/>}
            {!loading && 
                <div style={{marginTop: '25px'}}>
                    <Card style={cardStyle}>
                        <h3 style={{textAlign: 'left', marginTop: '-12px'}}>{capitalize(props.thisGuest.full_name)}</h3>
                        <Row style={{paddingTop: '20px'}}>
                            <Col span={16}>
                                <h3 style={{textAlign: 'left', display: 'inline'}}>Rehearsal Dinner:</h3>
                                <Radio.Group 
                                options={yesNoOptions} 
                                onChange={(e) => setDinResp(e.target.value)} 
                                value={dinResp} 
                                style={{ marginLeft: '10px'}}/>
                                <br/>
                                <h3 style={{textAlign: 'left', display: 'inline',paddingTop: 10}}>Welcome Happy Hour:</h3>
                                <Radio.Group 
                                options={yesNoOptions} 
                                onChange={(e) => setHappyResp(e.target.value)} 
                                value={happyResp} 
                                style={{ marginLeft: '10px'}}/>
                                <br/>
                                <h3 style={{textAlign: 'left', display: 'inline', paddingTop: 10}}>Farewell Brunch:</h3>
                                <Radio.Group 
                                options={yesNoOptions} 
                                onChange={(e) => setBrunchResp(e.target.value)} 
                                value={brunchResp} 
                                style={{ marginLeft: '10px'}}/>
                            </Col>
                        </Row>
                    </Card>
                    {props.plusOneGuest && 
                        <Card style={cardStyle}>
                            {props.plusOneGuest &&  
                                <h3 style={{textAlign: 'left', marginTop: '-12px'}}>{capitalize(props.plusOneGuest.full_name)}</h3>
                            }
                            <Row style={{paddingTop: '20px'}}>
                                <Col span={16}>
                                    <h3 style={{textAlign: 'left', display: 'inline'}}>Rehearsal Dinner:</h3>
                                    <Radio.Group 
                                    options={yesNoOptions} 
                                    onChange={(e) => setDinRespPlusOne(e.target.value)} 
                                    value={dinRespPlusOne} 
                                    style={{ marginLeft: '10px'}}/>
                                    <br/>
                                    <h3 style={{textAlign: 'left', display: 'inline', paddingTop: 10}}>Welcome Happy Hour:</h3>
                                    <Radio.Group 
                                    options={yesNoOptions} 
                                    onChange={(e) => setHappyRespPlusOne(e.target.value)} 
                                    value={happyRespPlusOne} 
                                    style={{ marginLeft: '10px'}}/>
                                    <br/>
                                    <h3 style={{textAlign: 'left', display: 'inline', paddingTop: 10}}>Farewell Brunch:</h3>
                                    <Radio.Group 
                                    options={yesNoOptions} 
                                    onChange={(e) => setBrunchRespPlusOne(e.target.value)} 
                                    value={brunchRespPlusOne} 
                                    style={{ marginLeft: '10px'}}/>
                                </Col>
                            </Row>
                        </Card>
                    }
                    <div style={{ textAlign: 'right', margin: '20px'}}>
                        <Button
                            type="primary"   
                            size="large"  
                            onClick={submitRsvp} 
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            }
            {loading && <RingLoading />}
        </div>
    )
}

export default OtherRSVP;