import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../Navbar/Navbar'
import Rooms from '../Rooms/Rooms'
import Events from '../Events/Events'
import WelcomePage from '../WelcomePage/WelcomePage'
import '../../App.css'

class Dashboard extends Component {


  toggelComponentToRender = () => {
    if (this.props.toggel.showRooms) {
      return <Rooms />
    } else if (this.props.toggel.showEvents) {
      return <Events />
    } else {
      return <WelcomePage />
    }
  }


  render() {

    return (
      <div className='site'>
        <nav className='site-nav flex-center'>
          <Navbar />
        </nav>
        <main className='site-content'>
          <section className='content-topic'>

            {this.toggelComponentToRender()}

          </section>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}


export default connect(mapStateToProps, {})(Dashboard)