import React, { Component } from 'react'
import loading from '../loading11.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img  src={loading} alt="spinner" />
      </div>
    )
  }
}

export default Spinner