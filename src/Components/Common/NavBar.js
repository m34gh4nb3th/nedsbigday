import React from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { isMobile } from "react-device-detect";

const NavBarRouter = withRouter(props => <NavBar {...props}/>);

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        let currentPath = this.props.location.pathname.substring(1);
        this.state = {
            selectedKey: currentPath || "home",
        };
    }

    render() {
        return (
            <Menu onClick={this.props.onChangePage} mode={isMobile ? "vertical" : "horizontal"} style={{ textAlign: 'center', borderBottom: '0px', borderRight: '0px', backgroundColor: '#fffdfc'}} defaultSelectedKeys={[this.state.selectedKey]}>
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="rsvp">
                    <Link to="/rsvp">RSVP</Link>
                </Menu.Item>
                <Menu.Item key="travel">
                    <Link to="/travel">{isMobile ? 'Travel' : 'Travel and Accommodations'}</Link>
                </Menu.Item>
                <Menu.Item key="activities">
                    <Link to="/activities">{isMobile ? 'Attractions' : 'Local Attractions'}</Link>
                </Menu.Item>
                <Menu.Item key="trivia">
                    <Link to="/trivia">Trivia</Link>
                </Menu.Item>
                <Menu.Item key="registry">
                    <Link to="/registry">Registry</Link>
                </Menu.Item>
                <Menu.Item key="covid">
                    <Link to="/covid">COVID</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default NavBarRouter;