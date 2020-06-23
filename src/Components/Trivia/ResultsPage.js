import React, { Fragment } from 'react';
import { Row, Col, Card, Button } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import Confetti from 'react-dom-confetti';

const confettiConfig = {
    angle: 90,
    spread: "300",
    startVelocity: "35",
    elementCount: 100,
    dragFriction: 0.1,
    duration: "4580",
    stagger: "0",
    width: "19px",
    height: "10px",
    colors: ["#C1DCBD", "#C3D9CC", "#A4C0A7", "#3F6248", "#688F6D"]
};

class ResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confetti: false,
        };
    }

    componentDidMount() {
        if (this.props.score/this.props.questionsNum === 1) {
            setTimeout(() => this.setState({confetti: true}), 800);
        }
    }

    render() {
        return (
            <Fragment>
            
            <Row align='center' style={{ paddingTop: '50px', marginBottom: '100px'}}>
                <Col md={{ span: 12 }} xs={{ span: 16 }} style={{ textAlign: 'center' }}>
                    <h2>Results</h2>
                    <div  style={{ textAlign: 'center', marginLeft: '90px' }}>
                        <Confetti
                            config={confettiConfig}
                            active={this.state.confetti}
                            className="confetti-final"
                        />
                    </div>
                    <h3 style={{ fontSize: '24px', marginBottom: '50px'}}>Your Score: {this.props.score}/{this.props.questionsNum}</h3>
                    {this.props.responses.map( response => (
                        <Card style={{ textAlign: 'left', marginBottom: '10px' }} key={response.question}>
                            <h3>{response.question}</h3>
                            {response.result === 'Correct' && 
                                <Row align="middle">
                                    <Col span={18}>
                                        <p><strong>Answer:</strong> {response.correctAnswer}</p>
                                    </Col>
                                    <Col span={6} style={{ textAlign:'right' }}>
                                        <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize: '48px'}} />
                                    </Col>
                                </Row>
                            }
                            {response.result === 'Wrong' && 
                                <Row align="middle">
                                    <Col span={18}>
                                        <p>You answered: {response.selectedAnswer}</p>
                                        <strong>Correct answer: {response.correctAnswer}</strong>
                                    </Col>
                                    <Col span={6} style={{ textAlign:'right' }}>
                                        <CloseCircleTwoTone twoToneColor="#c42e1a" style={{fontSize: '48px'}} />
                                    </Col>
                                </Row>
                            }
                            {response.explanation &&
                                <div style={{ textAlign: 'center' }}>
                                    <i>{response.explanation}</i>
                                </div>
                            }
                        </Card>
                    ))}
                </Col>
                <Button onClick={this.props.playAgain}>Try Again</Button>
            </Row>
            </Fragment>
        )
    }
}

export default ResultsPage;