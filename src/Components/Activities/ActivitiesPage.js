import React, {Fragment} from 'react';
import ActivityLayout from './ActivityLayout';
import { activityData } from './activityData';

import { isMobile } from "react-device-detect";

class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const style = {
            page: {
                paddingLeft: isMobile ? '10px' : '100px', 
                paddingRight: isMobile ? '10px' : '100px', 
                paddingTop: '50px',
                textAlign: 'center',
            },
            info: {
                marginBottom: '50px', 
                width: isMobile ? '100%' : '60%',
                display: 'inline-block',
            }
            
        }

        const iconSize = isMobile ? "75px" : "100px";

        return(
            <Fragment>
                <div style={style.page}>
                    <h1 style={{ paddingBottom: '25px' }}>LOCAL ATTRACTIONS</h1>
                    <div style={style.info}>
                        <i >We are so thankful for everyone who is traveling so far to share this occasion with us. While you are here, we hope you can enjoy some of the things we love so much about this city!</i>
                    </div>
                </div>
                <ActivityLayout titleSide="left" title="Things To Eat" activities={activityData.toEat} icon={<img src="/food-and-wine-icon.png" width={iconSize} alt=""/>} restaurant={true}/>
                <ActivityLayout titleSide="right" title="Places To Run" activities={activityData.toRun} icon={<img src="/running-icon.png" width={iconSize} alt=""/>}/>
                <ActivityLayout titleSide="left" title="Things To Do" activities={activityData.toDo} icon={<img src="/city-icon.png" width={iconSize} alt=""/>}/>
            </Fragment>
        )
    }
}

export default Activities;
