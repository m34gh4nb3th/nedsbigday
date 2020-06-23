import React, { Fragment } from 'react';
import { getTriviaQuestions } from '../../Database/trivias';
import { Progress } from 'antd';
import { isMobile } from "react-device-detect";
import TriviaStart from './TriviaStart';
import TriviaQuestion from './TriviaQuestion';
import ResultsPage from './ResultsPage';
import { getRandom } from '../../utils';

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
                    questions: getRandom(res,10),
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
            questions: getRandom(prevState.allQuestions,10),
        }));
    }

    increaseProgress = () => {
        this.setState( prevState => ({
            progress: prevState.progress != null ? prevState.progress + 1 : 0
        }));
    }

    nextQuestion = (response) => {
        this.setState( prevState => ({
            question: prevState.question != null ? prevState.question + 1 : 0,
            score: response.result === 'Correct' ? prevState.score + 1 : prevState.score,
            showResults: prevState.question === (prevState.questions.length - 1),
            responses: [ ...prevState.responses, response],
        }))
    }
    
    showResults = () => {
        this.setState({ showResults: true });
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
                paddingLeft: '100px', 
                paddingRight: '100px',
                paddingTop: '50px'
            }
        }

        const progressPercent = (this.state.questions.length === 0 || this.state.progress === null) ? 0 : (this.state.progress)/this.state.questions.length * 100;
        const lastQuestion = this.state.question === (this.state.questions.length - 1);
        return(
            <div>
                <div style={style.header}>
                    <h1>Trivia</h1>
                </div>
                {this.state.progress === null && 
                    <TriviaStart startTrivia={this.startTrivia}/>
                }
                {this.state.progress != null && !this.state.showResults &&
                    <Fragment>
                        <TriviaQuestion 
                            question={this.state.questions[this.state.question]} 
                            next={this.nextQuestion}
                            lastQuestion={lastQuestion}
                            showResults={this.showResults}
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
                {this.state.showResults && 
                    <ResultsPage 
                        questionsNum={this.state.questions.length} 
                        responses={this.state.responses} 
                        score={this.state.score}
                        playAgain={this.playAgain}
                    />
                }
            </div>
        )
    }
}

export default TriviaPage;