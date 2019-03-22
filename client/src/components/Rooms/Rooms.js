import React, { Component } from 'react'
import { List, Icon } from 'antd'
import { getRooms } from '../../actions/fetchRooms'
import { toggelAllLightsInRoom, getRoomState } from '../../actions/lightsActions'
import LightsInRoomModal from '../LightsInRoomModal/LightsInRoomModal'
import BrigthnessModal from '../BrigthnessModal/BrigthnessModal'
import '../../App.css'

class CardProfle extends Component {
  
  state = {
    rooms: []
  }

  async componentWillMount() {
    let allRooms = await getRooms()
    this.setState({ rooms: allRooms })
  }

  roomList = (rooms) => {
    let roomsList = []
    rooms.forEach(element => {
      roomsList.push({
        id: `${element.id}`,
        title: `${element.name}`,
        lights: `${element.lights.length}`,
        lightInRoom: [element.lights]
      })

    });
    return roomsList
  }

  toggelAllLightsInRoom = async (id) => {
    let roomState = await getRoomState(id)
    if (roomState.lastAction.on) {
      toggelAllLightsInRoom(id, false)
    } else if (!roomState.lastAction.on) {
      toggelAllLightsInRoom(id, true)
    }
  }

  render() {

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )

    return (
      <List
        itemLayout='vertical'
        size='small'
        dataSource={this.roomList(this.state.rooms)}
        header={<div><b>Rooms</b> </div>}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={item.title}
            actions={[
              <LightsInRoomModal roomName={item.title} lightsInRoom={item.lightInRoom} />,
              <div onClick={() => this.toggelAllLightsInRoom(item.id)} ><IconText type='api' text='Turn on' /></div>,
              <IconText type='bulb' text={item.lights} />,
              <BrigthnessModal roomID={item.id} roomName={item.title} />]}
          >
            <div className='roomsCard'> <p className='roomText'>{item.title}</p></div>
          </List.Item>
        )}
      />
    )
  }
}

export default CardProfle
