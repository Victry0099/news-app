import React, { Component } from 'react'

export class NewsItem extends Component {
    

  render() {
  let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div><div className="card" style={{width: "18rem"}}>
      <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107257542-1686841240624-gettyimages-1244689982-AFP_32NB3E7.jpeg?v=1702333126&w=1920&h=1080":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target='_blank' className="btn btn-primary">Read more</a>
      </div>
    </div></div>
    )
  }
}

export default NewsItem
