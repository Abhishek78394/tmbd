import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InfiniteScroll from "react-infinite-scroll-component";
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Moviecard from '../../Components/MovieCard/Moviecard';
import Spiner from '../../Components/Spiner/Spiner';
function Movies() {
  const [content, setContent] = useState([]);
  const [pageNo, setPageNo] = useState(1)
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0)

  const GetDataTrending = async () => {

   try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?            api_key=${API_KEY}&page=${pageNo}&with_genres=&language=en-US`)
    setContent(data.results);
   
   } catch (err) {
    console.log(err)
   }
  }
  useEffect(() => {
    console.log('Trending Component did mount');
    GetDataTrending();

  }, [])

  const fetchMoreData = async () => {   
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNo}&with_genres=&language=en-US`)
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
              <h1 className='txtCenter'>Top Trending Movies</h1>
              <h3 className='txtCenter'> For You</h3>
            </section>
          </Col>
          <InfiniteScroll
                    dataLength={content.length}
                    next={fetchMoreData}
                    hasMore={content.length !== totalResults}
                    loader={<Spiner/>}
                >  
          <Container>
            <Row>


{
  content && content.length > 0 ? content.map((item, index) => {
    return (<Moviecard key={index} data={item} />)
  }) : <Spiner/>
}

            </Row>
          </Container>
          </InfiniteScroll> 
        </Row>
      </Container>
    </main>
  )
}

export default Movies