import React, { Fragment } from 'react';
import { Row, Col, Button, Radio, Card } from 'antd';
import Confetti from 'react-dom-confetti';


const confettiConfig = {
    angle: 90,
    spread: "155",
    startVelocity: "35",
    elementCount: 50,
    dragFriction: 0.1,
    duration: "4580",
    stagger: "0",
    width: "19px",
    height: "10px",
    colors: ["#C1DCBD", "#2c332d", "#A4C0A7", "#3F6248", "#688F6D"]
};

const radioStyle = {
    display: 'block',
    height: '40px',
    lineHeight: '40px',
    fontSize: '20px',
};

class TriviaQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: null,
            result: null,
            confetti: false,
        };
    }

    selectOption = e => {
        this.setState({ 
            selectedAnswer: e.target.value,
        })
    }

    checkAnswer = () => {
        const result = this.state.selectedAnswer === this.props.question.correct_answer ? 'Correct' : 'Wrong';
        this.setState({ 
            result: result,
        });
        if (result === 'Correct') {
            setTimeout(() => this.setState({confetti: true}), 800);
        }
        this.props.increaseProgress();
    }

    nextQuestion = () => {
        const response = {
            result: this.state.result,
            question: this.props.question.question_text,
            selectedAnswer: this.state.selectedAnswer,
            correctAnswer: this.props.question.correct_answer,
            explanation: this.props.question.explanation,
        }
        this.props.next(response);
        this.setState({ 
            selectedAnswer: null,
            result: null,
        })
    }

    makeConfetti = () => {
        this.setState({confetti: true})
    }

    componentDidUpdate() {
        if (this.state.confetti) {
            this.setState({confetti: false});
        }
    }
    
    

    render() {
        const style = {
            header: { 
                position: 'absolute',  
                right: '5%', 
                textAlign: 'right',
            }
        }
        const nextButtonText = this.props.lastQuestion ? 'See Your Final Score' : 'Next';
        const cardClass = this.state.result === 'Correct' ? 'card-with-shadow card-with-click' : 'card-with-shadow-wrong';
        return (
            <Row align='center'>
                <Col md={{ span: 12 }} xs={{ span: 22 }}>
                    <h2>{this.props.question.question_text}</h2>
                    {!this.state.result && 
                        <Fragment>
                            <Radio.Group 
                                value={this.state.selectedAnswer} 
                                onChange={this.selectOption} 
                                style={{minHeight: '200px'}}
                            >
                                {this.props.question.possible_answers.map( option => 
                                    <Radio 
                                        value={option} 
                                        key={option} 
                                        style={radioStyle}
                                    >
                                        {option}
                                    </Radio>
                                )}
                            </Radio.Group>
                            <div style={{ textAlign: 'right', marginTop: '15px' }}>
                                <Button 
                                    size="large" 
                                    type="primary" 
                                    onClick={this.checkAnswer} 
                                    disabled={!this.state.selectedAnswer}
                                >
                                    Submit
                                </Button>
                            </div>
                        </Fragment>
                    }
                    {this.state.result &&  
                        <Fragment>
                            <Row style={{minHeight: '200px'}} justify="center" align="middle">
                                <Col md={{ span: 12 }} xs={{ span: 20 }}>
                                    {this.state.result === 'Wrong' &&
                                        <div className={cardClass}>
                                            <h3 style={{ ...style.header, fontSize: 32, top: '50%' }}>Wrong</h3>
                                            <div style={{ ...style.header, top: '75%'}}>
                                                <p style={{ marginBottom: '0px'}}><strong>Correct Answer:</strong> {this.props.question.correct_answer}</p>
                                                {this.props.question.explanation && 
                                                    <i>{this.props.question.explanation}</i>
                                                }
                                            </div>
                                            <img src="/sad-dog.png" width="100%" alt="" style={{opacity: '0.2'}}></img>
                                        </div>
                                    }
                                    {this.state.result === 'Correct' &&
                                        <Card onClick={this.makeConfetti} className={cardClass}>
                                            <h3 style={{fontSize: 32 }}>Correct!</h3>
                                            <div  style={{ textAlign: 'center', marginLeft: '90px' }}>
                                                <Confetti
                                                    config={confettiConfig}
                                                    active={this.state.confetti}
                                                    className="confetti"
                                                />
                                            </div>
                                            <div style={{textAlign: 'center'}}>
                                                <p><strong>Answer:</strong> {this.props.question.correct_answer}</p>
                                                {this.props.question.explanation && 
                                                    <i>{this.props.question.explanation}</i>
                                                }
                                            </div>
                                        </Card>
                                    }    
                                </Col>
                            </Row>
                            <div style={{ textAlign: 'right', marginTop: '15px' }}>
                                <Button 
                                    size="large" 
                                    type="primary" 
                                    onClick={this.nextQuestion}
                                >
                                    {nextButtonText}
                                </Button>
                            </div>
                        </Fragment>
                    }
                </Col>
            </Row>
        )
    }
}

export default TriviaQuestion;