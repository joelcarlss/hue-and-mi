import React, { Component } from 'react'
import '../../App.css'
import { Modal, Icon, Slider } from 'antd';
import { } from '../../actions/lightsActions'
import '../../App.css'
class ModalRoom extends Component {

    state = { visible: false, disabled: false, }

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
    }

    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    }

    render() {

        const { disabled } = this.state;

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
                    width={700}
                >
                    <div className="textbox">
                        <div onClick={this.toggelLight} className="alignleft" >
                            <Icon type="bulb" text="Turn on" /> Turn on
                        </div>

                        <div className="middle">
                            <Slider defaultValue={30} disabled={disabled} />
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
