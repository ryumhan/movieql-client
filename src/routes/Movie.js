import { useParams } from "react-router-dom";
import {gql, useQuery} from "@apollo/client";

const GET_MOVIE = gql`
  query getMovies($movieId : ID!){
    movie(id:$movieId){
    id
    title
    }
  }
`

export default function Movie() {
  const params = useParams();
  const {data, loading} = useQuery(GET_MOVIE, {
    variables:{
      movieId: params.id,
    }
    });
  
    console.log(data, loading);
    if(loading){
      return <h1>Fetching Movie...</h1>
    }

  return <div>{data.movie.title}</div>;
}
