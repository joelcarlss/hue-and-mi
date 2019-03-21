import React, { Component } from 'react'
import '../../App.css'
import { Modal, Icon, Slider } from 'antd';
import { adjustBrightnessInRoom } from '../../actions/lightsActions'
import '../../App.css'
class ModalRoom extends Component {

    state = {
        visible: false,
        disabled: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    }

    onChangeSlider = (e, roomID) => {
        adjustBrightnessInRoom(e, roomID)

    }

    render() {

        const { disabled } = this.state;

        return (
            <div>

                <div onClick={this.showModal}>
                    <Icon type="setting" text="Adjust brightness" /> {' '}Adjust brightness
                </div>

                <Modal
                    title={`Adjust brightness in ${this.props.roomName}`}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="textbox">
                        <div className="middle">
                            <Slider onChange={(e) => this.onChangeSlider(e, this.props.roomID)} defaultValue={30} disabled={disabled} />
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ModalRoom
