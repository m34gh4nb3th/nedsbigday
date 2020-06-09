import React from 'react';
import { Row, Col, Card } from 'antd';
import {
    RightOutlined,
    DownOutlined
  } from '@ant-design/icons';
import ToEatList from './ToEatList';
import RunList from './RunList';
import ToDoList from './ToDoList';


class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openCards: {
                eat: false,
                run: false,
                do: false,
            },
        };
    }

    toggleThisCard = (category) => {
        this.setState(prevState => ({
            openCards: {
                ...prevState.openCards,
                [category]: !prevState.openCards[category],
            }
        }))
    }

    render() {
         console.log('openCards',this.state.openCards);

        return(
            <div style={{ paddingLeft: '100px', paddingRight: '100px', paddingTop: '50px', paddingBottom: '100px' }}>
                <h2 style={{textAlign: 'center', fontFamily: 'AmaticSC', fontSize: 42}}>Local Attractions</h2>
                <div style={{textAlign: 'center', marginBottom: '50px'}}>
                    <i>We are so thankful for everyone who is traveling so far to share this occasion with us.</i><br/>
                    <i>We hope you can enjoy some of the things we love so much about this city!</i>
                </div>
                <Row gutter={12}>
                    <Col span={8}>
                        <Card onClick={() => this.toggleThisCard("eat")}>
                            <p style={{ fontFamily: 'Montserrat', textAlign: 'center', fontSize: 30, color: '#1DA57A', marginBottom: '-10px'}}>
                                Things to Eat 
                                {this.state.openCards["eat"] && 
                                    <DownOutlined style={{fontSize: 24, paddingLeft: '10px'}}/>
                                }
                                {!this.state.openCards["eat"] && 
                                    <RightOutlined style={{fontSize: 24, paddingLeft: '10px'}}/>
                                }
                            </p>
                            {this.state.openCards["eat"] && 
                                <ToEatList />
                            }
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card onClick={() => this.toggleThisCard("run")}>
                            <p style={{ fontFamily: 'Montserrat', textAlign: 'center', fontSize: 30, color: '#1DA57A', marginBottom: '-10px'}}>
                                Places to Run 
                                {this.state.openCards["run"] && 
                                    <DownOutlined style={{fontSize: 24, paddingLeft: '10px'}}/>
                                }
                                {!this.state.openCards["run"] && 
                                    <RightOutlined style={{fontSize: 24, paddingLeft: '10px'}}/>
                                }
                            </p>
                            {this.state.openCards["run"] && 
                                <RunList />
                            }
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card onClick={() => this.toggleThisCard("do")}>
                            <p style={{ fontFamily: 'Montserrat', textAlign: 'center', fontSize: 30, color: '#1DA57A', marginBottom: '-10px'}}>
                                Things to Do
                                {this.state.openCards["do"] && 
                                    <DownOutlined style={{fontSize: 24, paddingLeft: '10px'}}/>
                                }
                                {!this.state.openCards["do"] && 
                                    <RightOutlined style={{fontSize: 24, paddingLeft: '10px'}}/>
                                }
                            </p>
                            {this.state.openCards["do"] && 
                                <ToDoList />
                            }
                        </Card>
                    </Col>
                </Row>   
            </div>
        )
    }
}

export default Activities;