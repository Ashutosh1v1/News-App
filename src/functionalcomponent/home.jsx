import React ,{useState ,useEffect} from 'react'
import Newsitem from './newsitem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home (props){
  let [articles ,setArticles] =useState([])
  let [totalResults ,setTotalResults] =useState(0)
  let [page ,setPage] =useState(1)
  
async function getAPIdata () {
    var response =""
    try {
      if (props.search) {

        response = await fetch(`https://newsapi.org/v2/everything?sortBy=publishedAt&page=1&q=${props.search}&language=${props.language}&pageSize=20&apiKey=45c1d1d40a284bb789f64c20e7203682`)
      }
      else {

         response = await fetch(`https://newsapi.org/v2/everything?sortBy=publishedAt&page=1&q=${props.q}&language=${props.language}&pageSize=20&apiKey=45c1d1d40a284bb789f64c20e7203682`)
      }
      response = await response.json()
      setArticles(response.articles)
      setTotalResults(response.totalResults)
       
    }
    catch (error) {
      // alert("something went wrong")
    }

  }
 async function fetchMoreData () {
    setPage(page+1)
    var response=""
    try {
      if (props.search) {

         response = await fetch(`https://newsapi.org/v2/everything?sortBy=publishedAt&page=${page}&q=${props.search}&language=${props.language}&pageSize=20&apiKey=45c1d1d40a284bb789f64c20e7203682`)
      }
      else {

         response = await fetch(`https://newsapi.org/v2/everything?sortBy=publishedAt&page=${page}&q=${props.q}&language=${props.language}&pageSize=20&apiKey=45c1d1d40a284bb789f64c20e7203682`)
      }
      response = await response.json()
      
      setArticles(articles.concat(response.articles))
    }
    catch (error) {
      // alert("something went wrong")
    }




  };
 useEffect(()=>{
  getAPIdata()
 },[props])
 
    return (
      <>
        <div className='container-fluid'>
          <h3 className='background p-2 m-2 text-center text-light' >{props.search ? props.search : props.q} News</h3>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={
              <div className='text-center'>
                <div className="spinner-border mt-3 mb-3 text-center text-primary" role="status">

                </div>
              </div>
            }
          >
            <div className='row' >
              {
                articles.map((item, index) => {
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

