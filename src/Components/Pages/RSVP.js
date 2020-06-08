import React, { useState } from 'react';
import { Input, Button, Alert } from 'antd';
import { getGuestByName } from '../../Database';

const RSVP = () => {
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

    return (
        <div>
            <h1 
                style={{
                    fontFamily: 'NothingYouCouldDo', 
                    textAlign: 'center', 
                    padding: '100px', 
                    fontSize: 36}}
            >
                Coming Soon...
            </h1>
            {!thisGuest &&
                <div>
                    <span>Please enter your full name as it appears on your invitation. If there are multiple names on your invitation you may enter either</span>
                    <Input
                        placeholder="Your Full Name"
                        value={enteredName} 
                        onChange={(e) => setEnteredName(e.target.value)}
                    />
                    {error && <Alert message={error} type="error" />}
                    <Button
                        type="primary"
                        loading={loading}
                        onClick={searchForGuest}
                    >
                        Continue
                    </Button>
                </div>
            }
            {thisGuest && !loading &&
                <div>
                    <h2>Welcome, {thisGuest.full_name}{plusOneGuest ? ` and ${plusOneGuest.full_name}` : null}</h2>
                    
                </div>
            }
        </div>
    )
}

export default RSVP;