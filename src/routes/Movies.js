import { gql, useQuery } from "@apollo/client";
import { Link } from 'react-router-dom'

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;
export default function Movies() {
  const { data, error, loading } = useQuery(ALL_MOVIES);
  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>Could not fetch :</h1>;
  }

  return (
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
      <h1>Movies</h1>
      {data.allTweets.map((tweet) => (
        <li key={tweet.id}>{tweet.author.fullName}</li>
      ))}
    </ul>
  );
}
