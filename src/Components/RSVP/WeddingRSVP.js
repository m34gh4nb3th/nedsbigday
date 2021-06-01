import React, { useState, Fragment } from 'react';
import { capitalize } from '../../utils';
import { Radio, Card, Row, Col, Button, Input, Alert, notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import RingLoading from './RingLoading';
import { updateGuest, createGuest, getGuestById } from '../../Database';
import firestore from '../../Database/firestoreConfig';

const db = firestore.firestore();

const yesNoOptions = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
];

const WeddingRSVP = (props) => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ addPlusOne, setAddPlusOne ] = useState(false);
    const [ plusOneName, setPlusOneName ] = useState(null);
    const [ recResp, setRecResp ] = useState(props.thisGuest.attending_reception);
    const [ recRespPlusOne, setRecRespPlusOne ] = useState(props.plusOneGuest ? props.plusOneGuest.attending_reception : null);

    const missingValues = () => {
        if (((props.plusOneGuest || plusOneName) && ( !recRespPlusOne))
            || ( !recResp )) return true;
        else return false;
    }
    
    const handleUpdateGuests = (guests) => {
        //first guest in array is always primary
        //second is the plus one if there is one
        guests.forEach( (guest, index, array) => {
            let gId = guest.id;
            delete guest.id;
            updateGuest(gId, guest).then( good => {
                if (good) {
                    if (index === 0) {
                        getGuestById(gId).then(res => {
                            if (res) props.setThisGuest(res);
                        }).catch(err => {
                            console.log('err',err);
                        });
                        //props.setThisGuest(guest);
                    }
                    else {
                        getGuestById(gId).then(res => {
                            if (res) props.setPlusOneGuest(res);
                        }).catch(err => {
                            console.log('err',err);
                        });
                        //props.setPlusOneGuest(guest);
                    }
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

    const handleNewGuest = () => {
        //new guest object
        let newGuest = {
            full_name: plusOneName.toLowerCase(),
            unknown_plus_one: false,
            known_guest: db.doc(`/guests/${props.thisGuest.id}`),
            attending_reception: recRespPlusOne,
        }
        //send object to database
        createGuest(newGuest).then(guestId => {
            //query new guest and update state with new guest
            getGuestById(guestId).then(res => {
                if (res) props.setPlusOneGuest(res);
            }).catch(err => {
                console.log('err',err);
            });
            let updateGuest = {
                ...props.thisGuest,
                attending_reception: recResp,
                unknown_plus_one: false,
                known_guest: db.doc(`/guests/${guestId}`),
                new_list: true
            }
            //update original guest RSVP and plus one info
            handleUpdateGuests([updateGuest]);
        }).catch(err => {
            console.log('err',err);
            setLoading(false);
            setError(err.toString());
        });
    }

    const submitRsvp = () => {
        setLoading(true);
        setError(null);
        //check for errors
        const addingGuest = props.thisGuest.unknown_plus_one && addPlusOne;
        if (addingGuest && (!plusOneName || !plusOneName.trim())) {
            setError('Please enter the first and last name of your plus one or use the "X" button to remove them.');
            setLoading(false);
        } else if (missingValues()) {
            setError('Please RSVP to all wedding events.');
            setLoading(false);
        } else {
            //first need to add new guest
            if (addingGuest) {
                // need to make a new guest in the database for the plus one and connect it to the current guest
                handleNewGuest();
            } else {
                let guests = [];
                let updateGuest = {
                    ...props.thisGuest,
                    attending_reception: recResp,
                }
                //remove id field before sending to database
                guests.push(updateGuest);
                // add the plus one guest object if there is one
                if (props.plusOneGuest) {
                    let updatePlusOne = {
                        ...props.plusOneGuest,
                        attending_reception: recRespPlusOne,
                    }
                    guests.push(updatePlusOne);
                }
                // send the news to update to the database
                handleUpdateGuests(guests);
            }
        }
        
    }

    const title = 'We hope you can join us for our wedding celebration on August 7th!'
    const thisGuestLocked = props.thisGuest.attending_reception;
    const plusOneLocked = props.plusOneGuest && props.plusOneGuest.attending_reception;
    const allLocked = thisGuestLocked && (plusOneLocked || (!props.plusOneGuest && !addPlusOne));
    const style = {
        thisGuestCard: {
            borderColor: '#9bc2b6', 
            margin: '20px',
            backgroundColor: thisGuestLocked ? '#E8F6F1' : 'transparent'
        },
        plusOneCard: {
            borderColor: '#9bc2b6', 
            margin: '20px',
            backgroundColor: plusOneLocked ? '#E8F6F1' : 'transparent'
        }
    }
    return (
        <div>
            <h3>{title}</h3>
            {(thisGuestLocked || plusOneLocked) && !loading &&
                <div style={{textAlign: 'center'}}>
                    <p>If you need to change your RSVP please reach out to us and we can take care of it</p>
                </div>
            }
            {error && <Alert message={error} type="error"/>}
            {!loading && 
                <div style={{marginTop: '25px'}}>
                    <Card style={style.thisGuestCard}>
                        <h3 style={{textAlign: 'left', marginTop: '-12px'}}>{capitalize(props.thisGuest.full_name)}</h3>
                        <Row style={{paddingTop: '20px'}}>
                            <Col span={24}>
                                <h3 style={{textAlign: 'left', display: 'inline'}}>Ceremony & Reception:</h3>
                                <Radio.Group 
                                
                                options={yesNoOptions} 
                                onChange={(e) => setRecResp(e.target.value)} 
                                value={recResp} 
                                style={{ marginLeft: '10px'}}
                                disabled={props.thisGuest.attending_reception}/>
                            </Col>
                        </Row>
                    </Card>
                    {props.thisGuest.unknown_plus_one && !addPlusOne && 
                        <Button type="primary" style={{marginLeft: '20px'}} onClick={() => setAddPlusOne(true)}>Add Plus One Details</Button>
                    }
                    {(props.plusOneGuest || (props.thisGuest.unknown_plus_one && addPlusOne)) && 
                        <Card style={style.plusOneCard}>
                            {props.plusOneGuest && !props.thisGuest.unknown_plus_one && 
                                <h3 style={{textAlign: 'left', marginTop: '-12px'}}>{capitalize(props.plusOneGuest.full_name)}</h3>
                            }
                            {props.thisGuest.unknown_plus_one && !props.plusOneGuest &&
                                <div style={{position: 'relative'}}>
                                    <Input
                                        placeholder="Plus One Full Name"
                                        value={plusOneName} 
                                        onChange={(e) => setPlusOneName(e.target.value)}
                                        style={{marginBottom: '25px', maxWidth: '330px'}}
                                    />
                                    <CloseOutlined style={{position: 'absolute', right: '-15px', top: '-15px', color: '#9bc2b6', fontSize: '16px'}} onClick={() => setAddPlusOne(false)}/>
                                </div>
                            }
                            <Row style={{paddingTop: '20px'}}>
                                <Col span={24}>
                                    <h3 style={{textAlign: 'left', display: 'inline'}}>Ceremony & Reception:</h3>
                                    <Radio.Group 
                                    options={yesNoOptions} 
                                    onChange={(e) => setRecRespPlusOne(e.target.value)} 
                                    value={recRespPlusOne} 
                                    style={{ marginLeft: '10px'}}
                                    disabled={props.plusOneGuest && props.plusOneGuest.attending_reception}/>
                                </Col>
                            </Row>
                        </Card>
                    }
                    <div style={{ textAlign: 'right', margin: '20px'}}>
                        <Button
                            type="primary"   
                            size="large"  
                            onClick={submitRsvp} 
                            disabled={allLocked}              
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

export default WeddingRSVP;