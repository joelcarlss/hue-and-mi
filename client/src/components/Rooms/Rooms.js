import React, { Component } from 'react'
import { List, Icon } from 'antd'
import LightsInRoomModal from '../LightsInRoomModal/LightsInRoomModal'
import BrigthnessModal from '../BrigthnessModal/BrigthnessModal'
import '../../App.css'
class CardProfle extends Component {
  render () {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )

    const listData = []
    for (let i = 0; i < 5; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `Room ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      })
    }

    return (
      <List
        itemLayout='vertical'
        size='small'
        dataSource={listData}
        header={<div><b>Rooms</b> </div>}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={item.title}
            actions={[<LightsInRoomModal />, <IconText type='api' text='Turn on' />, <IconText type='bulb' text='5' />, <BrigthnessModal />]}
          >
            <div className='roomsCard'> <p className='roomText'>{item.title}</p></div>

          </List.Item>
        )}
      />
    )
  }
}

export default CardProfle
