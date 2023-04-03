import  React,{useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from '../Container/About/About';
import Home from '../Container/Home/Home'
import Movies from '../Container/Movie/Movies'
import TvSeries from '../Container/TVSeries/TvSeries'
import Search from '../Container/Search/Search'
import Contact from '../Container/Contact/Contact'
import Details from '../Container/Details/Details';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


import LoadingBar from 'react-top-loading-bar';

function RouteContainer() {
  const [progress, setProgress] = useState(5);
  return (
    <>
    <BrowserRouter>
    <LoadingBar color='#f11946' progress={progress} />
         <Header />
             <Routes>    
                 <Route Progress={setProgress}  path="/" element={<Home />} />
                 <Route Progress={setProgress}  path='/about' element={<About/>} />
                 <Route Progress={setProgress}  path="/movies" element={<Movies />} />
                 <Route Progress={setProgress}  path="/series" element={<TvSeries />} />
                 <Route Progress={setProgress}  path="/search" element={<Search />} />
                 <Route Progress={setProgress}  path="/contact" element={<Contact />} />
                 <Route Progress={setProgress}  path="/details/:movieid/:mediatype" element={<Details />} />
             </Routes>        
         <Footer />
     </BrowserRouter>
 </>
  )
}

export default RouteContainer

