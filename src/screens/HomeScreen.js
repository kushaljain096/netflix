import React from 'react'
import Banneer from "../Banner";
import "./HomeScreen.css";
import Nav from"../Nav";
import requests from "../requests";
import Row from"../Row"; 

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
           <Banneer />
           <Row title="NETFLIX ORIGINALS" 
           fetchUrl={requests.fetchNetflixOriginals}
           isLargeRow/>
           <Row title="Treanding Now" fetchUrl={requests.fetchTrending}/>
           <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
           <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
           <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
           <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
           <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            
        </div>
    );
}

export default HomeScreen;
