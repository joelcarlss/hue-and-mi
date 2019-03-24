import React, { Component } from 'react'
import { Button, TimePicker, Table, Timeline, InputNumber, Icon, Input } from 'antd'
import moment from 'moment'
import { addEvent, deleteEvent } from '../../actions/eventActions'
import { getEvents } from '../../actions/fetchEvents'
const format = 'HH'

class Events extends Component {
  state = {
    "nameOfEvent": '',
    "startingTime": 0,
    "stopTime": 0,
    "cleanEvery": 1,
    "noMovement": 1,
    "events": []
  }


  async componentWillMount() {
    let allEvents = await getEvents()
    this.setState({ events: allEvents })
  }

  setCleanEvery(dayNumber) {
    this.setState({ cleanEvery: dayNumber })
  }

  setCleanSinceLastMovment = (hourNumber) => {
    this.setState({ noMovement: hourNumber })
  }

  setStartingTime = (date, datestring, id) => {
    this.setState({ startingTime: datestring })
  }

  setStopTime = (date, datestring, id) => {
    this.setState({ stopTime: datestring })
  }

  deleteEvent = async (id) => {
    deleteEvent(id)
    let allEvents = await getEvents()
    this.setState({ events: allEvents })
  }


  addEventForCleaning = async () => {
    addEvent(
      this.state.nameOfEvent,
      this.state.startingTime,
      this.state.stopTime,
      this.state.cleanEvery,
      this.state.noMovement
    )
    let allEvents = await getEvents()
    this.setState({ events: allEvents })
  }


  renderEvents = (allEvents) => {
    return allEvents
  }

  render() {

    const columns = [{
      title: 'Event Name',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'Starting Time',
      dataIndex: 'fromHour',
      key: 'fromHour'
    }, {
      title: 'Stop Time',
      dataIndex: 'toHour',
      key: 'stopTime'
    }, {
      title: 'Clean Every',
      key: 'cleanEvery',
      dataIndex: 'daysSinceLast',
    }, {
      title: 'No movement since',
      dataIndex: 'noMovement',
      key: 'noMovement',
    },
    {
      title: 'Action', dataIndex: '', id: 'x', render: (id) => <Button type="danger" onClick={() => this.deleteEvent(id.id)}>Delete</Button>,
    }]

    return (
      <div>
        <h2> Schedule your vacuum cleaner <Icon type="calendar" /> </h2>

        <span>Name of event  <Input defaultValue='... ' onChange={(evt) => this.setState({ nameOfEvent: evt.target.value })} style={{ width: 200 }}
          size="small" placeholder="" />
        </span>

        <div className="fakeBR"></div>

        <span> Clean between  <TimePicker onChange={(date, dateString) => this.setStartingTime(date, dateString, 1)} defaultValue={moment('0', format)} format={format} /> and  <TimePicker onChange={(date, dateString) => this.setStopTime(date, dateString, 2)} defaultValue={moment('0', format)} format={format} /></span>

        <div className="fakeBR"></div>

        <span> Clean every <InputNumber min={1} max={14} defaultValue={0} onChange={(value) => this.setCleanEvery(value)} /> {' '} day </span>

        <div className="fakeBR"></div>

        <span>Clean when no movement for <InputNumber min={1} max={24} defaultValue={0} onChange={(value) => this.setCleanSinceLastMovment(value)} /> {' '} hours </span>

        <div className="fakeBR"></div>

        <Button onClick={this.addEventForCleaning} type="primary">Add</Button>

        <div className="fakeBR"></div>

        <hr />

        <div className="fakeBR"></div>

        <h2> Saved Events <Icon type="calendar" /> </h2>

        <Table columns={columns} rowKey="name"
          dataSource={this.renderEvents(this.state.events)} />
        <div className="fakeBR"></div>

        <hr />

        <div className="fakeBR"></div>

        <h2> Cleaning History <Icon type="calendar" /> </h2>

        <div className="fakeBR"></div>

        <Timeline>
          <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color='red'>
            <p>Solve initial network problems 1</p>
          </Timeline.Item>
          <Timeline.Item color='red'>
            <p>Solve initial network problems 3 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>Technical testing 3 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
        </Timeline>

      </div>
    )
  }
}

export default Events
