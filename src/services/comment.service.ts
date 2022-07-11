import { Comment, CommentInput } from "../schema/comment.schema";
import { Service } from "typedi";
import CommentModel from "../models/comment.model";


@Service()
export default class CommentService {
  async addComment(commentInput: CommentInput): Promise<Comment> {
    const newComment = await CommentModel.create(commentInput);
    return newComment;
  }

  async getComments(): Promise<Comment[]> {
    const comments = await CommentModel.find().limit(2);
    return comments;
  }
}

