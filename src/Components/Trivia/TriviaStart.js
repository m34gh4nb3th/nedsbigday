import React from 'react';
import { Row, Col, Button } from 'antd';


class TriviaStart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row align='center' style={{ paddingTop: '50px'}}>
                <Col md={{ span: 12 }} xs={{ span: 24 }} style={{ textAlign: 'center' }}>
                    <h2>How well do you know<br/> Ian & Meaghan & Ned?</h2>
                    <p>Don't worry we won't share or save the resuls!</p>
                    {!this.props.loading && 
                        <Button size="large" type="primary" onClick={this.props.startTrivia} style={{ marginTop: '25px' }}>Here we go!</Button>
                    }
                </Col>
            </Row>
        )
    }
}

export default TriviaStart;