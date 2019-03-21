import React, { Component } from 'react'
import '../../App.css'
import { Modal, Icon } from 'antd';
import { handleLights } from '../../actions/lightsActions'
import '../../App.css'
class ModalRoom extends Component {

    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    toggelLight = () => {
        handleLights()
    }


    render() {

        return (
            <div>

                <div onClick={this.showModal}>
                    <Icon type="search" text="View room" /> View room
                </div>

                <Modal
                    title="Lights in the room-name"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="textbox">
                        <div onClick={this.toggelLight} className="alignleft" >
                            <Icon type="bulb" text="Turn on" /> Turn on
                        </div>
                        <div className="alignright" >
                            Light ID
                        </div>
                    </div>

                </Modal>
            </div>
        )
    }
}

export default ModalRoom
