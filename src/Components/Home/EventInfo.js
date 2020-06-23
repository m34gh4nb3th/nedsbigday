import React from 'react';
import { Divider } from 'antd';

import {
    isBrowser,
    isMobile
} from "react-device-detect";


class EventInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const who = this.props.private ? 'Wedding Party & Imediate Family' : 'Everyone';
        return (
            <div style={{ paddingBottom: '50px'}}>
                <h3>
                    {this.props.eventName}
                    {this.props.extra && 
                        <p style={{ fontSize: 12 }}><i>{this.props.extra}</i></p>
                    }
                </h3>
                <div style={{ textAlign: 'center'}}>
                    <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Who?</span> {who} 
                    {isBrowser && 
                        <Divider type="vertical" />
                    }
                    {isMobile && 
                        <br />
                    }
                    <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Where?</span> 
                    {this.props.locationLink && 
                        <a href={this.props.locationLink}>{this.props.locationName}</a>
                    }
                    {!this.props.locationLink && 
                        this.props.locationName
                    }
                    {isBrowser && 
                        <Divider type="vertical" />
                    }
                    {isMobile && 
                        <br />
                    }
                    <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>When?</span> {this.props.time}
                    {isBrowser && 
                        <Divider type="vertical" />
                    }
                    {isMobile && 
                        <br />
                    }
                    <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Wear?</span> {this.props.attire}
                </div>
            </div>
        )
    }
}

export default EventInfo;