import React from 'react';
import { Divider } from 'antd';
import {
    RightOutlined,
    DownOutlined
  } from '@ant-design/icons';


class ToEatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {

        return(
            <div>
                <div style={{marginTop: '15px'}}>
                    <p style={{marginBottom: '0px', fontSize: 16}}><strong><a href="https://www.viatribunali.com/">Via Tribunali</a></strong></p>
                    <p>Pizza <Divider type="vertical" /> Multiple Locations
                    <Divider type="vertical" /> <a>Why we love it</a>
                    </p>
                </div>
                <div style={{marginTop: '15px'}}>
                    <p style={{marginBottom: '0px', fontSize: 16}}><strong><a href="https://www.viatribunali.com/">Salt & Straw</a></strong></p>
                    <p>Ice Cream <Divider type="vertical" /> Capitol Hill
                    <Divider type="vertical" /> <a>Why we love it</a>
                    </p>
                </div>
                <div style={{marginTop: '15px'}}>
                    <p style={{marginBottom: '0px', fontSize: 16}}><strong><a href="https://www.the-sitting-room.com/">The Sitting Room</a></strong></p>
                    <p>Cocktail Bar <Divider type="vertical" /> Queene Anne
                    <Divider type="vertical" /> <a>Why we love it</a>
                    </p>
                </div>
                <div style={{marginTop: '15px'}}>
                    <p style={{marginBottom: '0px', fontSize: 16}}><strong><a href="https://macrinabakery.com/">Macrina</a></strong></p>
                    <p>Bakery <Divider type="vertical" /> Multiple Locations
                    <Divider type="vertical" /> <a>Why we love it</a>
                    </p>
                </div>
            </div>

        )
    }
}

export default ToEatList;