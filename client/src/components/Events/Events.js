import React, { Component } from 'react'
import { Button, TimePicker, Table, Divider, Tag, Timeline, DatePicker } from 'antd'
import moment from 'moment'

const { RangePicker } = DatePicker

const format = 'HH'
class Events extends Component {


  state = {
    "startingTime": 0,
    "stopTime": 0
  }
  onChange(date, dateString) {
    console.log(date, dateString)
  }

  setHoursPerDay = (date, datestring, id) => {

    if (id === 1) {
      this.setState({ startingTime: datestring })
    }

    if (id === 2) {
      this.setState({ stopTime: datestring })
    }
  }

  addTime = () => {
    console.log(this.state.startingTime)
    console.log(this.state.stopTime)
    // add time here 
  }

  render() {
    return (
      <div>
        <h2> Schedule your vacuum cleaner</h2>
        <h4> Select time for cleaning </h4>
        Start: <TimePicker onChange={(date, dateString) => this.setHoursPerDay(date, dateString, 1)} defaultValue={moment('12', format)} format={format} />
        <br />
        Stop: <TimePicker onChange={(date, dateString) => this.setHoursPerDay(date, dateString, 2)} defaultValue={moment('12', format)} format={format} />
        <br />
        <Button onClick={this.addTime} type="primary">Add</Button>

        <br />

        <RangePicker onChange={this.onChange} />

      </div>
    )
  }
}

export default Events

// const data = [{
//   key: '1',
//   name: 'Event 1',
//   age: 32,
//   address: 'New York No. 1 Lake Park',
//   tags: ['nice', 'developer']
// }]

// const columns = [{
//   title: 'Name',
//   dataIndex: 'name',
//   key: 'name',
//   render: text => <a href='javascript:;'>{text}</a>
// }, {
//   title: 'Time',
//   dataIndex: 'age',
//   key: 'age'
// }, {
//   title: 'Description',
//   dataIndex: 'address',
//   key: 'address'
// }, {
//   title: 'Tags',
//   key: 'tags',
//   dataIndex: 'tags',
//   render: tags => (
//     <span>
//       {tags.map(tag => {
//         let color = tag.length > 5 ? 'geekblue' : 'green'
//         if (tag === 'loser') {
//           color = 'volcano'
//         }
//         return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>
//       })}
//     </span>
//   )
// }, {
//   title: 'Action',
//   key: 'action',
//   render: (text, record) => (
//     <span>
//       <a href='javascript:;'>Invite {record.name}</a>
//       <Divider type='vertical' />
//       <a href='javascript:;'>Delete</a>
//     </span>
//   )
// }]

// <Timeline>
// <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
// <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
// <Timeline.Item color='red'>
//   <p>Solve initial network problems 1</p>
//   <p>Solve initial network problems 2</p>
//   <p>Solve initial network problems 3 2015-09-01</p>
// </Timeline.Item>
// <Timeline.Item color='red'>
//   <p>Solve initial network problems 3 2015-09-01</p>
// </Timeline.Item>
// <Timeline.Item>
//   <p>Technical testing 3 2015-09-01</p>
// </Timeline.Item>
// <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
// <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
// </Timeline>

// <Button type='primary'>Add Event</Button>
// <br />

// <br />

// <h2>Events</h2>

// <Table columns={columns} dataSource={data} />
