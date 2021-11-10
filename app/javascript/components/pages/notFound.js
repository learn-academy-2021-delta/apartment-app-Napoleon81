import React, { Component } from 'react'
import noTrace from '../assets/leave_no_Trace.png'

class NotFound extends Component {
  render() {
    return (
      <div className="page-body">
      <h3>No Trace of Listings Found</h3>
      <img src={noTrace} alt="Leave No Trace" className="noTrace-apartment" />
    </div>
    )
  }
}
export default NotFound