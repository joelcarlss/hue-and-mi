import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd';
import { showRooms, showEvents, showWelcomeProfile } from '../../actions/ToggelActions'
import Statistics from '../Statistics/Statistics'
import '../../App.css'

const SubMenu = Menu.SubMenu;

class Navbar extends Component {
    state = {
        current: '1',
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    showRooms = () => {
        this.props.showRooms()
    }

    showEvents = () => {
        this.props.showEvents()
    }

    showWelcomePage = () => {
        this.props.showWelcomeProfile()
    }



    render() {
        return (
            <div className="menuStyle">
                <Statistics />
                <Menu
                    theme='dark'
                    onClick={this.handleClick}
                    style={{

                    }}
                    defaultOpenKeys={['']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <SubMenu key="sub4" title={<div onClick={this.showWelcomePage}><span><Icon type="home" /><span>Home</span></span></div>}>
                    </SubMenu>
                    <SubMenu key="sub1" title={<div onClick={this.showRooms} ><span ><Icon type="bulb" /><span onClick={this.showRooms} >Lights & Rooms</span></span></div>}>
                    </SubMenu>
                    <SubMenu key="sub2" title={<div onClick={this.showEvents} ><span><Icon type="calendar" /><span >Events</span></span></div>}>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}


export default connect(null, { showRooms, showEvents, showWelcomeProfile })(Navbar)