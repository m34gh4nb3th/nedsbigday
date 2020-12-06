import React, { Fragment } from 'react';
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
        return (
            <div style={{ paddingBottom: '50px'}}>
                <h3>
                    {this.props.eventName}
                </h3>
                {this.props.extra && 
                        <p style={{ fontSize: 12, textAlign: 'center', marginTop: '-10px' }}><i>{this.props.extra}</i></p>
                    }
                <div style={{ textAlign: 'center', fontSize: 16}}>
                    {this.props.detailsTbd &&
                        <i>Details to come</i>
                    }
                    {!this.props.detailsTbd &&
                        <Fragment>
                            <span style={{ fontFamily: 'Montserrat', paddingRight: '10px'}}>Where?</span> 
                            {this.props.locationLink && 
                                <a href={this.props.locationLink} target="_blank">{this.props.locationName}</a>
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
                        </Fragment>
                    }
                </div>
            </div>
        )
    }
}

export default EventInfo;