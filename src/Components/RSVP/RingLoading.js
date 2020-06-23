import React from 'react';

const RingLoading = () => (
    <div style={{textAlign: 'center', position: 'relative', color: '#1DA57A'}}>
        <img id="ring" src="/ring-icon.png" width="150px" alt="" style={{ paddingBottom: '18px'}}/>
        <p style={{ position: 'absolute',  top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Loading...</p>
    </div>
);

export default RingLoading;