import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';




export default class News extends Component {

     static defaultProps={
      country: 'in',
      pageSize: 8,
      category:'general',
     }
     static propTypes={
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,

     }
     constructor(props){
        super(props);
        // console.log("I am news class constructor");
        this.state ={
            articles: [],
            loading: false,
            page:1,
            totalResults: 0
        }
      }
     

   async updateNews(){
    // console.log("cdm")
    this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f058e4ceb3f4e2597f2dc662d7c8aad&page=${this.props.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parseData = await data.json();
    this.props.setProgress(70)
    // console.log(parseData)
    this.setState({articles:parseData.articles,
               totalResults: parseData.totalResults })
               this.props.setProgress(100)

   }
   async componentDidMount(){
          
          this.updateNews()
    }
    fetchMoreData = async () => {
      this.setState({ page: this.state.page + 1 });
  
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f058e4ceb3f4e2597f2dc662d7c8aad&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  
      let data = await fetch(url);
      let parseData = await data.json();
  
      this.setState(prevState => ({
          articles: [...prevState.articles, ...parseData.articles],
          totalResults: parseData.totalResults
      }));
  
      console.log("moredatafetch");
  };
  
   

  render() {
    return (
      <>
      
        <h2 className='text-center' style={{margin: '55px 30px'}}>NewsVictry-Top {this.props.category}</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>} 
          >
         <div className="container">
        <div className="row">
        {this.state.articles.map((element, index) => {
    return (
        <div className="col-md-4" key={`${element.url}-${index}`}>
            <NewsItem
                title={element.title ? element.title.slice(0, 50) : ""}
                description={element.description ? element.description.slice(0, 95) : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
            />
        </div>
    );
})}

        </div>
       
        </div>
        </InfiniteScroll>
     
      </>
    )
  }
}