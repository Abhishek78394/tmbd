import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import RouteContainer from './Route/RouteContainer'
import { useEffect, useState } from 'react';
function App() {


  const arr =[
    {
      name :'abhi',
      url:'https://picsum.photos/id/870/536/354?grayscale&blur=2'
    } ,{
      name :'abhi',
      url:'https://picsum.photos/id/870/536/354?grayscale&blur=2'
    }, {
      name :'abhi',
      url:'https://picsum.photos/id/870/536/354?grayscale&blur=2'
    }, {
      name :'abhi',
      url:'https://picsum.photos/id/870/536/354?grayscale&blur=2'
    }
  ]



const [content, setContent] = useState();
  const fetchMoreData = async () => {   
    const { data } = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-11-27&sortBy=publishedAt&apiKey=e2486483efeb4e6f832cff7f60e89ec2')
      console.log(data ,"deta is catched")
      setContent(data.articles);
      const image = content.articles.urlToImage;
      console.log(image)
    };
    useEffect(() => {
      fetchMoreData();
      console.log('component did mount');
    }, [])


  return (
    <div className="App">
      <RouteContainer/>

     
    </div>
  );
}

export default App;
