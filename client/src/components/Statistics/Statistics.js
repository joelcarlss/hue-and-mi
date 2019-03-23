import React, { Component } from 'react'
import { PageHeader, Tag, Row, Col, Button } from 'antd'
import { turnOnVacuumerAction, turnOffVacuumerAction, dockVacummerAction } from '../../actions/vacuumerActions'
import '../../App.css'


class Statistics extends Component {

  state = {
    vacummerState: []
  }

  turnOnVacuumer = (bool) => {
    turnOnVacuumerAction(bool)
  }

  turnOffVacuumer = (bool) => {
    turnOffVacuumerAction(bool)
  }

  dockVacuumer = (bool) => {
    dockVacummerAction(bool)
  }

  render() {

    const Description = ({ term, children, span = 12 }) => (
      <Col span={span}>
        <div className='description'>
          <div className='term'>{term}</div>
          <div className='detail'>{children}</div>
        </div>
      </Col>
    )

    const content = (
      <Row span={24}>
        <Description term='Battery'>Last Clean {' '}</Description>
        <Description term={<Tag color='green'>100%</Tag>}>
          2017-01-10 <br />
          20:03:10
        </Description>
      </Row>
    )

    const extraContent = (
      <Row>
        <Row>
          <Description term='Status ' />
          <Description term={'dock'} />
        </Row>
        <Row>
          <div className='startStopButtons'>
            <Button onClick={() => this.turnOnVacuumer(true)} type='primary' icon='thunderbolt' size={'small'}>Start</Button>
            <Button onClick={() => this.turnOffVacuumer(false)} type='primary' icon='stop' size={'small'}>Stop</Button>
          </div>
        </Row>
        <div>
          <Row className='dockButton'>
            <Button onClick={() => this.turnOffVacuumer(false)} type='primary' icon='home' size={'small'}>Dock</Button>
          </Row>
        </div>
      </Row>

    )

    return (
      <PageHeader
        title='Vacuumer'
        subTitle=''
        extra={[
        ]}
        className={'stat'}
      >
        <div className='wrap'>
          <div className='content padding'>{content}</div>
          <div className='extraContent'>{extraContent}</div>
        </div>
      </PageHeader>
    )
  }
}

export default Statistics
