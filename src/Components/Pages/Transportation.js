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
            <p style={{textAlign: 'center'}}>Saturday is spread out across a few different venues and we want to make sure it's as easy as possible for folks to get around without driving. See below for details on provided transportation</p>
            <Card style={style.card}>
                <h4>2:30 - Charter Hotel to Gates Amphitheater</h4>
                <p>A shuttle will be waiting for guests in front of the hotel</p>
                <h4>3:30 - Gates Amphitheater to Charter Hotel</h4>
                <p>Guests can return to the hotel for the not-so-catholic gap if they wish</p>
                <h4>5:30 - Charter Hotel to Reception</h4>
                <p>A shuttle will be waiting for guests in front of the hotel</p>
                <h4>5:45 - Pub 70 to Reception</h4>
                <p>The shuttle will go from the hotel to Pub 70 and head to Almquist Family Winery from there</p>
                <h4>Post Reception - Lyft Code</h4>
                <p>Guests can use our Lyft Code for $20 off. You can enter the code MEAGHANANDIAN21 in the Rewards section of the app before boking your ride. If you don't have Lyft <a href="https://www.lyft.com/i/MEAGHANANDIAN21" style={{textDecoration: 'underline'}}>you can download it here and the code will automatically be applied</a></p>
            </Card>
            
        </div>
    )
}

export default Transportation;