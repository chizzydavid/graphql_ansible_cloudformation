import { Field, InputType, ObjectType, ID, Int } from "type-graphql";
import { Comment } from "./comment.schema";
import { Imdb, ImdbInput} from "./imdb.schema";



@ObjectType()
export class Movie {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  plot: string;

  @Field(() => [String])
  genres: string[];

  @Field(() => Int)
  runtime: number;
  
  @Field(() => [String])
  cast: string[];

  @Field(() => Int)
  num_mflix_comments: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  fullplot: string;  

  @Field(() => [String])
  countries: string[];

  @Field(() => String)
  released: string;

  @Field(() => [String])
  directors: string[];

  @Field(() => String, { nullable: true })
  rated: string;

  @Field(() => String)
  type: string;  

  @Field(() => Imdb)
  imdb?: Imdb;

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[]
}


@InputType()
export class MovieInput implements Partial<Movie> {
  @Field(() => String)
  plot: string;

  @Field(() => [String])
  genres: string[];

  @Field(() => Int)
  runtime: number;
  
  @Field(() => [String])
  cast: string[];

  @Field(() => Int)
  num_mflix_comments: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  fullplot: string;  

  @Field(() => [String])
  countries: string[];

  @Field(() => String)
  released: string;

  @Field(() => [String])
  directors: string[];

  @Field(() => String, { nullable: true })
  rated: string;

  @Field(() => String)
  type: string;  

  @Field(() => ImdbInput)
  imdb: Imdb;
}


