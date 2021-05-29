import React from 'react';
import { Card } from 'antd';
import { isMobile } from "react-device-detect";

const style = {
    card: {
        margin: '20px',
        textAlign: 'left'
    },
    page: {
        paddingLeft: isMobile ? '10px' : '100px', 
        paddingRight: isMobile ? '10px' : '100px', 
        paddingTop: '50px',
        textAlign: 'center',
    },
}


const Covid = () =>  {
    return(
        <div style={style.page}>
            <h1 style={{ paddingBottom: '25px' }}>COVID UPDATES</h1>
            <p><strong>We will do our best to keep this information up-to-date as restrictions and guidelines change in the coming months.</strong></p>
            <Card style={style.card}>
                <ul>
                    <li>
                        If you are able to get vaccinated, we urge you to please do so!
                    </li>
                    <li>
                        Please plan on traveling with masks and your vaccination card. We do not know yet what will be required but it is best to be prepared.
                    </li>
                    <li>
                        Whether you are vaccinated or not, if you are feeling sick, please use your best judgement and stay home if necessary. We will miss you terribly but
                        want to make sure we keep everyone as safe as possible!
                    </li>
                    <li>
                        It is likely that the various events over the weekend will have different guidelines. We will be as specific as possible when we have these details 
                        but please be prepared and flexible. 
                    </li>
                </ul>
                <div style={{textAlign: 'center'}}>
                    <a href="https://kingcounty.gov/depts/health/covid-19.aspx" target="_blank">King Country COVID-19 Information and Resources</a>
                </div>
            </Card>
            
        </div>
    )
}

export default Covid;