import React from 'react';
import {
    PhoneOutlined,
} from '@ant-design/icons';

const FooterCredits = () => (
    <div style={{ textAlign: 'center' }}>
        <small style={{ marginBottom: '0px' }}>Created by Meaghan and Ian ~ Inspired by Ned</small><br/>
        <small style={{ marginBottom: '0px' }}>Please don't hesitate to reach out if you have any technical difficulties!</small><br/>
        <small><PhoneOutlined style={{marginRight: '5px'}}/> Meaghan (207) 756-3315 | Ian (774) 291-9648</small><br/>
        <small>All icons by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com"><small>Icons8</small></a></small>
    </div>
    
)

export default FooterCredits;