import { Schema, model, Document } from 'mongoose';
import { IComment } from './comment.model';

export interface IImdb {
  id: string;  
  rating: number;
  votes: number; 
}

export interface IMovie extends Document {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];  
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  countries: string[];
  released: string;
  directors: string[];
  rated: string;
  type: string;
  imdb?: IImdb;
  comments?: IComment[],
  createdAt: Date;
}

const MovieSchema: Schema = new Schema(
  {
    _id: { type: String },
    plot: { type: String },
    genres: { type: [String] },
    runtime: { type: Number },
    cast: { type: [String] },
    num_mflix_comments: { type: Number },
    title: { type: String },
    fullplot: { type: String },
    countries: { type: [String] },
    released: { type: String },
    directors: { type: [String] },
    rated: { type: String },
    type: { type: String },
    imdb: { 
      id: { type: String },
      rating: { type: Number },
      votes: { type: Number }
    },
    createdAt: { type: Date }
  },
  {
    timestamps: true
  }
)


const MovieModel = model<IMovie>('Movie', MovieSchema);

export default MovieModel;

