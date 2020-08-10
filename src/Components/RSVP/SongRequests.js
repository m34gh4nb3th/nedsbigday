import React, { useState } from 'react';
import { Input, Button, Alert, notification } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import RingLoading from './RingLoading';
import { updateGuest } from '../../Database'
import { isMobile } from "react-device-detect";

const SongRequests = (props) => {

    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ songTitle, setSongTitle ] = useState(null);
    const [ songArtist, setSongArtist ] = useState(null);

    const submitSong = () => {
        setLoading(true);
        setError(null);
        if ((songTitle == null || songTitle == '') && (songArtist == null || songArtist == '')) {
            setError('You must enter a song title or artist');
            setLoading(false);
        } else {
            const existingSongs = props.thisGuest.song_requests || [];
            existingSongs.push(`${songTitle || ''} by ${songArtist || ''}`);
            let thisGuestUpdate = {
                ...props.thisGuest,
                song_requests: existingSongs,
            }
            let gId = thisGuestUpdate.id;
            delete thisGuestUpdate.id;
            updateGuest(gId, thisGuestUpdate).then( good => {
                if (good) {
                    props.setThisGuest({...thisGuestUpdate, id: gId });
                    setLoading(false);
                    notification.open({
                        message: 'Thanks!',
                        description:'Your song request has been received.',
                    });
                    setSongTitle(null);
                    setSongArtist(null);
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
                    <h3 style={{marginBottom: '25px'}}>Help us with the playlist for the evening!</h3>
                    {error && <Alert message={error} type="error" style={{marginBottom: '10px'}}/>}
                    <div>
                        <div style={{display: 'inline'}}>
                        <Input.Group compact>
                            <Input
                            placeholder="Song Title"
                            value={songTitle} 
                            style={{marginBottom: '25px', maxWidth: !isMobile ? '275px' : ''}}
                            onChange={(e) => setSongTitle(e.target.value)} 
                             />
                            <Input
                            placeholder="Artist Name"
                            addonBefore={'by'}
                            value={songArtist} 
                            style={{marginBottom: '25px', maxWidth: !isMobile ? '275px' : ''}}
                            onChange={(e) => setSongArtist(e.target.value)} 
                             />
                        {!isMobile &&
                            <Button
                                type="primary"   
                                onClick={submitSong}                 
                            > 
                                <PlayCircleOutlined style={{fontSize: 22}}/>
                            </Button>
                        }
                        </Input.Group>
                    </div>
                    {isMobile &&
                        <div style={{ textAlign: 'right'}}>
                            <Button
                                type="primary"   
                                onClick={submitSong}                 
                            > 
                                <PlayCircleOutlined style={{fontSize: 22}}/>
                            </Button>
                        </div>
                    }
                </div>
                </div>
            }
            {loading && <RingLoading />}
        </div>
        
    )
}

export default SongRequests;