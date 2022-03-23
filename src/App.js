import './App.css';
import {useState} from "react"; //useState is a HOOK that contains 2 info or an array
import {NavBar, MoviesList} from './components';
import axios from 'axios';

const API_BASE_URL = "https://api.themoviedb.org/3/movie/550?";
// 866d3fc19510e7fbd2ab3d53cbd47aec

function App() {
  //useState will rerender the function and rerun it TO prevent From rerendering we use redux
  const [movies, setMovies] = useState([]);  // 1(movies) is data 2nd is function
  const [inputValue, setInputValue] = useState(""); //for taking input for search
  const [isLoading, setIsLoading] = useState(false);

  const search = async (e) => { //for searching in input
    // console.log(e);
    if(e.key === "Enter"){
      console.log('Entered');
      setIsLoading(true);
      let response = await axios.get( API_BASE_URL + "api_key=866d3fc19510e7fbd2ab3d53cbd47aec&language=en-US&query=" + inputValue);
      //set Data
      // console.log(response);
      setMovies(response.data.Search); //Getting search
      setIsLoading(false);
    }
  };

  return (
    <div className="main">
      <NavBar search={search} inputValue={inputValue} setInputValue={setInputValue}></NavBar>
      <MoviesList movieList={movies} isLoading={isLoading}></MoviesList>
    </div>
  );
}

export default App;
