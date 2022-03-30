// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    let firstNameStatus
    let lastNameStatus
    if (firstName === false) {
      firstNameStatus = null
    } else {
      firstNameStatus = (
        <div className="first-last-container">
          <p className="name">Joe</p>
        </div>
      )
    }
    if (lastName === false) {
      lastNameStatus = null
    } else {
      lastNameStatus = (
        <div className="first-last-container">
          <p className="name">Jonas</p>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="names-container">
            <div className="name-container">
              <button
                type="button"
                className="button"
                onClick={this.onFirstName}
              >
                Show/Hide Firstname
              </button>
              {firstNameStatus}
            </div>
            <div className="name-container">
              <button
                type="button"
                className="button"
                onClick={this.onLastName}
              >
                Show/Hide Lastname
              </button>
              {lastNameStatus}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
