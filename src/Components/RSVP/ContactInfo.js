import React, { useState } from 'react';
import { Input, Button, Alert, notification } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import RingLoading from './RingLoading';
import { updateGuest } from '../../Database'

const ContactInfo = (props) => {
    const getEmailFromGuests = () => {
        let ret = null;
        if (props.thisGuest.email) ret = props.thisGuest.email;
        else if (props.plusOneGuest && props.plusOneGuest.email) ret = props.plusOneGuest.email;
        return ret;
    }

    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ email, setEmail ] = useState(() => getEmailFromGuests());

    const validEmail = (email) => {
        if (!email.includes('@') || !email.includes('.')) return false;
        else return true;
    }

    const submitEmail = () => {
        setLoading(true);
        setError(null);
        if (email == null || email == '') {
            setError('No email address entered');
            setLoading(false);
        } else if (!validEmail(email)) {
            setError('Your email address appears to be invalid');
            setLoading(false);
        } else {
            let thisGuestUpdate = {
                ...props.thisGuest,
                email: email,
            }
            let gId = thisGuestUpdate.id;
            delete thisGuestUpdate.id;
            updateGuest(gId, thisGuestUpdate).then( good => {
                if (good) {
                    props.setThisGuest(thisGuestUpdate);
                    setLoading(false);
                    notification.open({
                        message: 'Thanks!',
                        description:'Your email have been saved.',
                    });
                }
            }).catch(err => {
                console.log('err',err);
                setLoading(false);
                setError(err.toString());
            })
        }
    }

    return(
        <div style={{margin: '20px'}}>
            {!loading && 
                <div>
                    <h3 style={{marginBottom: '25px'}}>Please provide your email address for quick updates</h3>
                    <p>We will be closely monitoring the state of COVID and will update you promptly if we need to make changes to our plans</p>
                    {error && <Alert message={error} type="error" style={{marginBottom: '10px'}}/>}
                    <Input
                        prefix={<MailOutlined style={{marginRight: '10px'}}/>}
                        placeholder="Preferred Email Address"
                        value={email} 
                        style={{marginBottom: '25px', maxWidth: '330px'}}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Button
                        type="primary"   
                        onClick={submitEmail}                 
                    >
                        Submit
                    </Button>
                </div>
            }
            {loading && <RingLoading />}
        </div>
        
    )
}

export default ContactInfo;