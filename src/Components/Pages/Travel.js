import React from 'react';


class Travel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div style={{ paddingLeft: '100px', paddingRight: '100px', paddingTop: '50px', paddingBottom: '100px' }}>
                <h1 style={{ paddingBottom: '25px' }}>Travel and Accommodations</h1>
            </div>
        )
    }
}

export default Travel;