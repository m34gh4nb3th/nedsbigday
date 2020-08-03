import React, { Fragment } from 'react';
import { getTriviaQuestions } from '../../Database/trivias';
import { Progress, Alert } from 'antd';
import { isMobile } from "react-device-detect";
import TriviaStart from './TriviaStart';
import TriviaQuestion from './TriviaQuestion';
import ResultsPage from './ResultsPage';
import RingLoading from '../RSVP/RingLoading';
import { getRandom } from '../../utils';

const numOfQuestions = 3;

class TriviaPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allQuestions: [],
            questions: [],
            loading: true,
            error: null,
            progress: null,
            question: null,
            showResults: false,
            score: 0,
            responses: [],
        };
    }

    componentDidMount() {
        getTriviaQuestions().then(res => {
            if (res.length > 0) {
                this.setState({
                    allQuestions: res,
                    questions: getRandom(res,numOfQuestions),
                    loading: false,
                    error: null,
                })
            } else {
                this.setState({
                    questions: [],
                    loading: false,
                    error: 'Sorry we could not find any trivia questions',
                })
            }
        })
    }

    startTrivia = () => {
        this.setState({
            progress: 0,
            question: 0,
        });
    }

    playAgain = () => {
        this.setState( prevState => ({
            progress: 0,
            question: 0,
            questions: getRandom(prevState.allQuestions,numOfQuestions),
            showResults: false,
            score: 0,
            responses: [],
        }));
    }

    increaseProgress = () => {
        this.setState( prevState => ({
            progress: prevState.progress != null ? prevState.progress + 1 : 0
        }));
    }

    nextQuestion = (response) => {
        const lastQuestion = this.state.question === (this.state.questions.length - 1)
        this.setState( prevState => ({
            question: prevState.question != null ? prevState.question + 1 : 0,
            score: response.result === 'Correct' ? prevState.score + 1 : prevState.score,
            showResults: lastQuestion,
            responses: [ ...prevState.responses, response],
            loading: lastQuestion,
        }))
        if (lastQuestion) {
            setTimeout(() => this.setState({loading: false}), 2000);
        }
    }

    render() {
        const style = {
            header: {
                paddingLeft: isMobile ? '10px' : '100px', 
                paddingRight: isMobile ? '10px' : '100px', 
                paddingTop: '50px', 
                paddingBottom: '10px', 
            },
            progress: {
                paddingLeft: isMobile ? '10px' : '100px', 
                paddingRight: isMobile ? '10px' : '100px',
                paddingTop: '50px'
            }
        }
        console.log('this.state.questions',this.state.questions);
        const progressPercent = (this.state.questions.length === 0 || this.state.progress === null) ? 0 : (this.state.progress)/this.state.questions.length * 100;
        const lastQuestion = this.state.question === (this.state.questions.length - 1);
        return(
            <div>
                <div style={style.header}>
                    <h1>Trivia</h1>
                </div>
                {this.state.progress === null && 
                    <TriviaStart startTrivia={this.startTrivia} loading={this.state.loading}/>
                }
                {this.state.questions.length == 0 && this.state.progress != null &&
                        <Alert 
                        message={"Oops! We could not find any trivia questions"} 
                        type="error" 
                        style={{margin: '20px', textAlign: 'center'}}/>
                }
                {this.state.progress != null && !this.state.showResults && this.state.questions.length > 0 &&
                    <Fragment>
                        <TriviaQuestion 
                            question={this.state.questions[this.state.question]} 
                            next={this.nextQuestion}
                            lastQuestion={lastQuestion}
                            increaseProgress={this.increaseProgress}
                        />
                        <Progress 
                            strokeLinecap="square" 
                            percent={progressPercent} 
                            style={style.progress} 
                            strokeColor={'#1DA57A'}
                            showInfo={false}
                        />
                    </Fragment>
                }
                {this.state.showResults && !this.state.loading && 
                    <ResultsPage 
                        questionsNum={this.state.questions.length} 
                        responses={this.state.responses} 
                        score={this.state.score}
                        playAgain={this.playAgain}
                    />
                }
                {this.state.loading && <RingLoading calculating={this.state.showResults}/>}
            </div>
        )
    }
}

export default TriviaPage;