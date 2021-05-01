import React, { Fragment } from 'react';
import { Divider, Popover } from 'antd';

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
        const popContent = <li>
            <ul>We will provide transportation back to the Charter Hotel if you wish to return to homebase.</ul>
            <ul>Otherwise, we recommend exploring the Sculpture park and/or killing some time at <a href="https://pub70.com/" target="_blank">Pub 70 </a> 
            on Alaska Ave.</ul>
            <ul>We will coordinate shuttles from both the hotel and Pub 70 to drop off at Almquist for 6:00PM Cocktail Hour.</ul>
        </li>

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
                    {!this.props.detailsTbd && !this.props.gap &&
                        <Fragment>
                            <strong style={{paddingRight: '10px'}}>Where?</strong> 
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
                            <strong style={{paddingRight: '10px'}}>When?</strong> {this.props.time}
                            {this.props.attire && 
                                <>
                                {isBrowser && 
                                    <Divider type="vertical" />
                                }
                                {isMobile && 
                                    <br />
                                }
                                <strong style={{paddingRight: '10px'}}>Wear?</strong> {this.props.attire}
                                </>
                            }
                        </Fragment>
                    }
                    {this.props.gap && 
                        <Fragment>
                            <Popover content={popContent} trigger="click" overlayStyle={{width: isMobile ? '90%' : '40%'}}>
                                <a>Looking for something to do?</a>
                            </Popover>
                            {isBrowser ? <Divider type="vertical" /> : <br/>}
                            <strong style={{paddingRight: '10px'}}>When?</strong> {this.props.time}
                        </Fragment>
                    }
                </div>
            </div>
        )
    }
}

export default EventInfo;