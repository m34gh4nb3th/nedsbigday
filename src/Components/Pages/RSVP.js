import React from 'react';


class RSVP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div style={{ paddingLeft: '100px', paddingRight: '100px', paddingTop: '50px', paddingBottom: '100px' }}>
                <h2 style={{textAlign: 'center', fontFamily: 'AmaticSC', fontSize: 42, paddingBottom: '25px'}}>RSVP</h2>
                <h1 style={{fontFamily: 'NothingYouCouldDo', textAlign: 'center', padding: '100px', fontSize: 36}}>Coming Soon...</h1>
            </div>
        )
    }
}

export default RSVP;