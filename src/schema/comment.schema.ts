import { Field, InputType, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Comment {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  movie_id: string;  
  
  @Field(() => String)
  text: string;

  @Field(() => Date, { nullable: true })
  date: Date;  
}


@InputType()
export class CommentInput implements Partial<Comment> {
  @Field(() => String)
  name: string;

  @Field(() => String)
  text: string;

  @Field(() => String)
  movie_id: string;

  @Field(() => String)
  email: string;
}

