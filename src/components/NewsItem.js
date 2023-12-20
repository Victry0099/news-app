import React, { Component } from 'react'

export class NewsItem extends Component {
    

  render() {
  let {title, description, imageUrl, newsUrl,author, date, source} = this.props
    return (
      <div><div className="card">
        <div style={{
          display:'flex',
          justifyContent: 'flex-end',
          position:'absolute',
          right:0
        }
        }>
         <span className=" badge rounded-pill bg-danger" style={{left: '90%', zIndex: 1}}>
             {source}
         </span>
         </div>
      <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107257542-1686841240624-gettyimages-1244689982-AFP_32NB3E7.jpeg?v=1702333126&w=1920&h=1080":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title} </h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-body-secondary"> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read more</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem
