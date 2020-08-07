import React from 'react';
import { Row, Col, Button } from 'antd';


const TriviaStart = (props) => {
    return (
        <Row align='center' >
            <Col 
                md={{ span: 24 }} 
                xs={{ span: 24 }} 
                style={{ textAlign: 'center' }}
            >
                <h2>How well do you know Ian & Meaghan & Ned?</h2>
                <p>Don't worry, we won't share or save the resuls!</p>
                {!props.loading && 
                    <Button 
                        size="large" 
                        type="primary" 
                        onClick={props.startTrivia} 
                        style={{ marginTop: '25px' }}
                    >
                        Here we go!
                    </Button>
                }
            </Col>
        </Row>
    )
}

export default TriviaStart;