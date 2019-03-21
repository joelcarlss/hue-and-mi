import React, { Component } from 'react'
import { Button, TimePicker, Table, Divider, Tag, Timeline, DatePicker } from 'antd'
import moment from 'moment'

const { RangePicker } = DatePicker

const format = 'HH:mm'
class Events extends Component {
  onChange (date, dateString) {
    console.log(date, dateString)
  }

  render () {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href='javascript:;'>{text}</a>
    }, {
      title: 'Time',
      dataIndex: 'age',
      key: 'age'
    }, {
      title: 'Description',
      dataIndex: 'address',
      key: 'address'
    }, {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>
          })}
        </span>
      )
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href='javascript:;'>Invite {record.name}</a>
          <Divider type='vertical' />
          <a href='javascript:;'>Delete</a>
        </span>
      )
    }]

    const data = [{
      key: '1',
      name: 'Event 1',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    }, {
      key: '2',
      name: 'Event 2',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    }, {
      key: '3',
      name: 'Event 3',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }]

    return (
      <div>
        <h2> Schedule your vacuum cleaner</h2>
        <TimePicker defaultValue={moment('12:08', format)} format={format} />
        <TimePicker defaultValue={moment('12:08', format)} format={format} />
        <br />  <RangePicker onChange={this.onChange} />
        <br />
        <br />

        <Button type='primary'>Add Event</Button>
        <br />

        <br />

        <h2>Events</h2>

        <Table columns={columns} dataSource={data} />
        <h2>History</h2>
        <Timeline>
          <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color='green'>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color='red'>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
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
