import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Rooms from '../Rooms/Rooms'
import Events from '../Events/Events'
import '../../App.css'

class Dashboard extends Component {
  render () {
    return (
      <div className='site'>
        <nav class='site-nav flex-center'>
          <Navbar />
        </nav>
        <main class='site-content'>
          <section class='content-topic'>
            <Rooms />
          </section>
        </main>
      </div>
    )
  }
}

export default Dashboard
