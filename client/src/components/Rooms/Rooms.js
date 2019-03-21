import React, { Component } from 'react'
import { List, Icon } from 'antd';
import Modal from '../Modal/Modal'
import '../../App.css'
class CardProfle extends Component {

    openModal = () => {

        console.log('open')
        // return <Modal />
    }
    render() {

        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );

        const listData = [];
        for (let i = 0; i < 5; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `Room ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }

        return (
            <List
                itemLayout="vertical"
                size="small"
                dataSource={listData}
                header={<div><b>Rooms</b> </div>}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={item.title}
                        actions={[<Modal />, <IconText type="bulb" text="Turn on" />, <IconText type="setting" text="Edit room" />]}
                    >
                        <div className="roomsCard"> <p className="roomText">{item.title}</p></div>

                    </List.Item>
                )}
            />
        )
    }
}



export default CardProfle