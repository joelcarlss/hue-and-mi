import React, { Component } from 'react'
import '../../App.css'
import { Modal, Icon, Slider } from 'antd';
import { toggelLightInRoom, getLampState, adjustLigthBrigthness } from '../../actions/lightsActions'
import '../../App.css'
class ModalRoom extends Component {

    state = { visible: false, disabled: false }

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

    renderRoomName = (room) => {
        return `Lights in ${room}`
    }

    toggelLight = async (id) => {
        let lampState = await getLampState(id)
        console.log(lampState)

        if (lampState.state.on) {
            toggelLightInRoom(id, false)
            this.setState({ toggel: true })
        } else if (!lampState.state.on) {
            toggelLightInRoom(id, true)
        }
    }

    adjustLight = (e, lightID) => {
        adjustLigthBrigthness(e, lightID)
    }



    renderLights = (lights, disabled) => {


        let lightsList = lights[0].map(lightID => {
            return <div key={lightID}>
                <div className="textbox">
                    <div onClick={() => this.toggelLight(lightID)} className="alignleft" >
                        <Icon type="bulb" text="Turn on" /> Turn on
        </div>
                    <div className="middle">
                        <Slider onChange={(e) => this.adjustLight(e, lightID)} defaultValue={30} disabled={disabled} />
                    </div>
                    <div className="alignright" >
                        Light ID : {lightID}
                    </div>
                </div>
            </div>
        })

        return lightsList
    }


    render() {
        const { disabled } = this.state;
        return (
            <div>

                <div onClick={this.showModal}>
                    <Icon type="search" text="View room" /> View room
                </div>

                <Modal
                    title={this.renderRoomName(this.props.roomName)}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={700}
                >
                    {this.renderLights(this.props.lightsInRoom, disabled)}
                </Modal>
            </div>
        )
    }
}

export default ModalRoom
