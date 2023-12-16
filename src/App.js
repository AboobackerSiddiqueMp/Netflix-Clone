import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Row from "./components/Row";
import { requests } from "./Request";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>

      <Row title='NetflixOriginal' fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title='Trending' fetchUrl={requests.fetchTrending}></Row>
      <Row title='TopRated' fetchUrl={requests.fetchTopRated}></Row>
      <Row title='ActionMovies' fetchUrl={requests.fetchActionMovies}></Row>
      <Row title='ComedyMovies' fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title='HorrorMovies' fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title='RomanceMovies' fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}></Row>

      
    </div>
  );
}

export default App;
