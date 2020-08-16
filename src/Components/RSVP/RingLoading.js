import React from 'react';

const RingLoading = (props) => (
    <div style={{textAlign: 'center', position: 'relative', color: '#86b59f'}}>
        <img id="ring" src="/ring-icon.png" width="150px" alt="" style={{ paddingBottom: '18px'}}/>
        <p style={{ position: 'absolute',  top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '13px' }}>
            {props.calculating ? 'Calculating...' : 'Loading...' }
        </p>
    </div>
);

export default RingLoading;