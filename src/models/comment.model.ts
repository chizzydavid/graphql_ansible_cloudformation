import { Schema, model, Document } from 'mongoose';

export interface IComment extends Document {
  _id: string;
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: Date;
  createdAt: Date;
}


const CommentSchema: Schema = new Schema(
  {
    _id: { type: String },
    name: { type: String },
    email: { type: String },
    movie_id: { type: String },
    text: { type: String },
    date: { type: Date },
    createdAt: { type: Date }
  },
  {
    timestamps: true
  }
)

const CommentModel = model<IComment>('Comment', CommentSchema);

export default CommentModel;


