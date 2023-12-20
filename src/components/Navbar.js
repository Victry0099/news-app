import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  

  render() {
    return (
      <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsVictry</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item"> */}
          {/* <Link className="nav-link active" aria-current="page" to="/general">Home</Link> </li> */}
            {/* <li className="nav-item"><a className="nav-link " aria-current="page" to="/about">About</a> </li> */}
            <li className="nav-item"><Link  className="nav-link" aria-current="page" to="/general">Home</Link></li>
            <li className="nav-item"><Link  className="nav-link" aria-current="page" to="/Business">business</Link></li>
            <li className="nav-item"><Link  className="nav-link" aria-current="page" to="/Entertainment">entertainment</Link></li>
            <li className="nav-item"><Link  className="nav-link" aria-current="page" to="/Health">health</Link></li>
            <li className="nav-item"><Link  className="nav-link" aria-current="page" to="/Science">science</Link></li>
            <li className="nav-item"><Link  className="nav-link" aria-current="page" to="/Sports">sports</Link></li>
            <li className="nav-item"><Link  className="nav-link" aria-current="page" to="/Technology">technology</Link></li>
        
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}
