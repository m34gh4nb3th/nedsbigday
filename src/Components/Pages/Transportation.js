import React from 'react';
import { Card } from 'antd';
import { isMobile } from "react-device-detect";

const style = {
    page: {
      width: isMobile ? '95%' : '80%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: isMobile ? '2.5%' : '10%',
      marginRight: isMobile ? '2.5%' : '10%',
    },
    card: {
      width: '100%'
    }
}


const Transportation = () =>  {
    return(
        <div style={style.page}>
            <h1 style={{ paddingBottom: '25px' }}>Wedding Day Transportation</h1>
            <p style={{textAlign: 'center'}}>Saturday's events are spread out across a few different venues and we want to make sure it's as easy as possible for folks to get around without driving. 
            <br/>See below for details on provided transportation.</p>
            <Card style={style.card}>
                <h4>2:30 - Charter Hotel to Gates Amphitheater</h4>
                <p>A shuttle will be waiting for guests in front of the hotel.</p>
                <h4>3:45 - Gates Amphitheater to Charter Hotel</h4>
                <p>
                    Guests can return to the hotel for the "not-so-Catholic" gap if they wish. 
                    <br/>Otherwise we recommend exploring the scultpure park or having a drink (or few) next door at <a href="https://pub70.com/" target="_blank">Pub 70. </a>
                </p>
                <h4>5:30 - Charter Hotel to Reception</h4>
                <p>A shuttle will be waiting for guests in front of the hotel.</p>
                <h4>5:45 - Pub 70 to Reception</h4>
                <p>The shuttle will stop at Pub 70 after picking up guest from the hotel on the way to Almquist Family Winery.</p>
                <h4>Post Reception - Lyft Code</h4>
                <p>
                    <i>There will be no shuttle service after the reception.</i> 
                    <br/>
                    But we have arranged a special discount Lyft Code for $20 off any ride on Saturday between any of the venues. 
                    <br/>
                    You can enter the code <strong>MEAGHANANDIAN21</strong> in the Rewards section of the app before boking your ride. 
                    <br/>
                    If you don't have Lyft <a href="https://www.lyft.com/i/MEAGHANANDIAN21" style={{textDecoration: 'underline'}}>you can 
                    download it here</a> and the code will automatically be applied.
                </p>
            </Card>
            
        </div>
    )
}

export default Transportation;