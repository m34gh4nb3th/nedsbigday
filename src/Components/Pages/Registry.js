import React from 'react';


class Registry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div style={{ paddingLeft: '100px', paddingRight: '100px', paddingTop: '50px', paddingBottom: '100px' }}>
                <h2 style={{textAlign: 'center', fontFamily: 'AmaticSC', fontSize: 42, paddingBottom: '25px'}}>Registry</h2>
            </div>
        )
    }
}

export default Registry;