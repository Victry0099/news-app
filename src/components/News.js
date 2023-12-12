import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

     
     constructor(){
        super();
        // console.log("I am news class constructor");
        this.state ={
            articles: [],
            loading: false
        }
      }

   async componentDidMount(){
          console.log("cdm")
          let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1f058e4ceb3f4e2597f2dc662d7c8aad"
          let data = await fetch(url);
          let parseData = await data.json();
          console.log(parseData)
          this.setState({articles:parseData.articles })
    }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsVictry-Top Headlins</h2>
        <div className="row">
        {this.state.articles.map ((element)=>{
          return  <div className="col-md-4" key = {element.url}>
            <NewsItem  title ={element.title?element.title.slice(0,50):""} description = {element.description?element.description.slice(0,95):""} imageUrl ={element.urlToImage}
            newsUrl = {element.url}/>
            </div>
        } )}
        
        
       
       
        </div>
      </div>
    )
  }
}
