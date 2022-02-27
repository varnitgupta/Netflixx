import react from 'react';
import './App.css';   
import Row from './components/Row';
import requests from './requests'; 
import Banner from './components/Banner'; 
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <Banner/>
      <Row 
      title ="NETFLIX ORIGINALS" 
      fetchUrl = {requests.fetchNetflixOriginals} 
      isLarge = {true}/>
      <Row title ="Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title ="Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title ="Acrion Movies " fetchUrl = {requests.fetchActionMovies}/>
      <Row title ="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title ="Horro Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title ="Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title ="Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
      </div>
  );
}

export default App;
