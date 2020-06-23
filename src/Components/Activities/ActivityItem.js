import React, {Fragment} from 'react';
import { Modal, Divider, Carousel } from 'antd';
import { isMobile, isBrowser } from "react-device-detect";



class ActivityItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    showModal = () => {
        this.setState({ modalVisible: true });
    }

    closeModal = () => {
        this.setState({ modalVisible: false });
    }

    render() {
        return(
            <Fragment>
                <div style={{marginBottom: '25px'}}>
                    <h3 style={{ textAlign: this.props.align, marginBottom: '0px' }}>
                        {this.props.link && 
                            <a href={this.props.link}> {this.props.title}</a>
                        }
                        {!this.props.link && <span>{this.props.title}</span> }
                    </h3>
                        {!this.props.restaurant && 
                            <Fragment>
                                <p>{this.props.subTitle}</p>
                                <a onClick={this.showModal}>More Info</a>
                            </Fragment>
                        }
                        {this.props.restaurant && 
                            <Fragment>
                                <p>
                                    {this.props.subTitle}
                                    { isMobile && <br/> }
                                    { isBrowser && <Divider type="vertical" /> }
                                    <a onClick={this.showModal}>More Info</a>
                                </p>
                            </Fragment>
                        }     
                </div>
                <Modal
                    visible={this.state.modalVisible}
                    onCancel={this.closeModal}
                    footer={null}
                    width={isMobile ? '500px' : '600px'}
                >
                    <h3>{this.props.title}</h3>
                    {this.props.image && this.props.image.length > 1 &&
                        <Carousel autoplay>
                            {this.props.image.map( img => (
                                <img src={img} width="100%" alt="" key={img}></img>
                            ))}
                        </Carousel>
                    }
                    {this.props.image && this.props.image.length == 1 &&
                        <img src={this.props.image} width="100%" alt=""></img>
                    }
                    <p style={{ paddingTop: '15px'}}>{this.props.description}</p>
                </Modal>
            </Fragment>
            
        )
    }
}

export default ActivityItem;


