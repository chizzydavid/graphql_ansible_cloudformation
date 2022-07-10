import { Movie, MovieInput } from "../schema/movie.schema";
import { Service } from "typedi";
import MovieModel from "../models/movie.model";



@Service()
export default class MovieService {
  async addMovie(movieInput: MovieInput): Promise<Movie> {
    const newMovie = await MovieModel.create(movieInput);
    return newMovie;
  }

  async getMovies(): Promise<Movie[]> {
    const movies = await MovieModel.aggregate([
      {
        $lookup: {
          from: 'comments',
          localField: '_id',
          foreignField: 'movie_id',
          as: 'comments'
        }
      }
    ]).limit(20);
    return movies;
  }
}

