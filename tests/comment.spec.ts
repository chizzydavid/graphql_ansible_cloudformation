import { graphqlRequest } from './utils';
import { gql } from 'graphql-tag';
import CommentModel from '../src/models/comment.model';
import { mockComment } from './mocks';


describe('Comment', () => {
  describe('Get Comments', () => {
    it('should return all comments', async () => {
      // jest.spyOn(CommentModel, 'limit')
      //     .mockResolvedValueOnce([mockComment] as any);
      CommentModel.find = jest.fn()
        .mockImplementationOnce(() => ({
          limit: () => [mockComment]
        }))

      const query = gql`
        query GetWarehouses{ 
          getComments {
            _id
            name
            text
            movie_id
            date
          }
        }     
      `;

      const res = await graphqlRequest(query);

      expect(res.errors).toBeUndefined();
      expect(res.data.getComments).toBeDefined()
      expect(Array.isArray(res.data.getComments)).toBeTruthy()
      expect(CommentModel.find).toHaveBeenCalledTimes(1)
    })
  })
})


