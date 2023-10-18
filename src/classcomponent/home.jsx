import React, { Component } from 'react'
import Newsitem from './newsitem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1

    }
  }
  getinputdata = async () => {
    var response =""
    try {
      if (this.props.search) {

        response = await fetch(`https://newsapi.org/v2/everything?sortBy=publishedAt&page=1&q=${this.props.search}&language=${this.props.language}&pageSize=20&apiKey=45c1d1d40a284bb789f64c20e7203682`)
      }
      else {

         response = await fetch(`https://newsapi.org/v2/everything?sortBy=publishedAt&page=1&q=${this.props.q}&language=${this.props.language}&pageSize=20&apiKey=45c1d1d40a284bb789f64c20e7203682`)
      }
      response = await response.json()
      this.setState({
        articles: response.articles,
        totalresults: response.totalresults
      })
    }
    catch (error) {
      // alert("something went wrong")
    }

  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    var response=""
    try {
      if (this.props.search) {

         response = await fetch(`https://newsapi.org/v2/everything?sortBy=publishedAt&page=${this.state.page}&q=${this.props.search}&language=${this.props.language}&pageSize=20&apiKey=45c1d1d40a284bb789f64c20e7203682`)
      }
      else {

         response = await fetch(`https://newsapi.org/v2/everything?sortBy=publishedAt&page=${this.state.page}&q=${this.props.q}&language=${this.props.language}&pageSize=20&apiKey=45c1d1d40a284bb789f64c20e7203682`)
      }
      response = await response.json()
      this.setState({
        articles: this.state.articles.concat(response.articles)

      })
    }
    catch (error) {
      // alert("something went wrong")
    }




  };
  componentDidMount() {
    this.getinputdata()

  }
  componentDidUpdate(old) {
    if (this.props !== old)
      this.getinputdata()



  }
  render() {
    return (
      <>
        <div className='container-fluid'>
          <h3 className='background p-2 m-2 text-center text-light' >{this.props.search ? this.props.search : this.props.q} News</h3>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={
              <div className='text-center'>
                <div className="spinner-border mt-3 mb-3 text-center text-primary" role="status">

                </div>
              </div>
            }
          >
            <div className='row' >
              {
                this.state.articles.map((item, index) => {
                  return <Newsitem
                    key={index}
                    title={item.title.slice(0, 70) + "..."}
                    description={item.description}
                    pic={item.urlToImage}
                    url={item.url}
                    source={item.source.name}
                    date={item.publishedAt}

                  />
                })
              }
            </div >
          </InfiniteScroll>


        </div>
      </>
    )
  }
}
