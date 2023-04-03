import React, { useEffect, useState } from 'react'
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Moviecard from '../../Components/MovieCard/Moviecard';
import Spiner from '../../Components/Spiner/Spiner';
function Home() {
  const [content, setContent] = useState([]);
  const [pageNo, setPageNo] = useState(1)
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0)
 
  const GetDataTrending = async (props) => {
    try {
   setTimeout(async() => {
  
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageNo}`)
    setContent(data.results);
    console.log(data, "data")
    console.log(data);
    setPageNo(pageNo)
   }, 100);
  props.setProgress(100)
   
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    GetDataTrending();
    console.log('component did mount');
  }, [])



    const fetchMoreData = async () => {   
      const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageNo}`)
       setTimeout(() => {
        setPageNo(pageNo+1) 
        setContent(content.concat(data.results))
       }, 2000);
        setTotalResults(data.total_results)
        console.log(data.results)
      };

  return (
    <main className='homePage'>
      <Container>
        <Row>
          <Col className='col-12'>
            <section>
              <h1 className='txtCenter'>Top Trending </h1>
              <h3 className='txtCenter'>Tv and Movie For You</h3>
            </section>
          </Col>
        
         <InfiniteScroll
                    dataLength={content.length}
                    next={fetchMoreData}
                    hasMore={content.length !== totalResults}
                    loader={<Spiner/>}
                >  
              <div className='container' >   
              <div className="row">
          {
            content && content.length > 0 ? content.map((item, index) => {
              return (<Moviecard key={index} data={item} />)
            }) : <Spiner/>
          } </div>
</div>
 </InfiniteScroll> 
        
       

        </Row>
      </Container>
    </main>
  )
}

export default Home;