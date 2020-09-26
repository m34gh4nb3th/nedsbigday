import React, { useState } from 'react';
import { Divider, Drawer } from 'antd';
import { isMobile } from "react-device-detect";
import { MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import NavBar from './NavBar';

const style = {
    heading: {
        marginBottom: '-20px', 
        fontSize: isMobile ? 54 : 64, 
        fontFamily: 'Poppins-light', 
        color: '#51755b'
    },
    icon: {
        fontSize: '24px', 
        color: '#86b59f',
        marginLeft: '20px',
        marginTop: '20px'
    },
    date: {
        marginBottom: '0px', 
        marginRight: '20px',
        marginTop: '20px',
        zIndex: 10, 
        display: 'inline', 
        float: 'right',
    }
}

const MobileHeader = () => {
    const [ openDrawer, setOpenDrawer ] = useState(false);


    return (
        <div>
            <div>
                <MenuOutlined style={style.icon} onClick={() => setOpenDrawer(true)}/>
                <h3 style={style.date}>August 7th, 2021 <Divider type="vertical" /> Seattle, WA</h3>
            </div>
            <br/>
            <h1 style={style.heading}>M E A G H A N</h1>
            <h1 style={{...style.heading, marginTop: '-30px', marginBottom: '-10px'}}>& I A N</h1>
            <Drawer
                title={null}
                placement="left"
                closable={true}
                onClose={() => setOpenDrawer(false)}
                visible={openDrawer}
                closeIcon={<ArrowLeftOutlined />}
            >
                <div style={{marginTop: '20px'}}><NavBar onChangePage={() => setOpenDrawer(false)}/></div>
            </Drawer>
        </div>
    )
    
}

export default MobileHeader;