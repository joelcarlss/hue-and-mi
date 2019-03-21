import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Rooms from '../Rooms/Rooms'
//import Events from '../Events/Events'
import '../../App.css'

class Dashboard extends Component {
  render () {
    return (
      <div className='site'>
        <nav className='site-nav flex-center'>
          <Navbar />
        </nav>
        <main className='site-content'>
          <section className='content-topic'>
            <Rooms />
          </section>
        </main>
      </div>
    )
  }
}

export default Dashboard
