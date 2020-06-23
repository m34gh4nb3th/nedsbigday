import React from 'react';
import {
    PhoneOutlined,
} from '@ant-design/icons';

const FooterCredits = () => (
    <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '0px' }}>Created by Meaghan and Ian ~ Inspired by Ned</p>
        <p style={{ marginBottom: '0px' }}>Please don't hesitate to reach out if you have any technical difficulties!</p>
        <p><PhoneOutlined style={{marginRight: '5px'}}/> Meaghan (207) 756-3315 | Ian (774) 291-9648</p>
        <small>All icons by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></small>
    </div>
    
)

export default FooterCredits;