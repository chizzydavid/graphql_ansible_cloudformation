import { graphqlRequest } from './utils';
import gql from 'graphql-tag';
import MovieModel from '../src/models/movie.model';
import { mockMovie } from './mocks';


describe('Movies', () => {
  describe('Get Movies', () => {
    it('should return all movies', async () => {
      // jest.spyOn(MovieModel, 'aggregate')
      //     .mockImplementationOnce(() => [mockMovie] as any)
      MovieModel.aggregate = jest.fn()
        .mockImplementationOnce(() => ({
          limit: () => [mockMovie]
        }))

      const query = gql`
        query GetLandmarks{
          getMovies {
            _id
            plot
            genres
            runtime
            title
            fullplot
            cast
            num_mflix_comments
            countries
            released
            type
            imdb {
              id
              rating
            }
            comments {
              _id
              movie_id
              text
            }
          }
        }     
      `;

      const res = await graphqlRequest(query);

      expect(res.errors).toBeUndefined();
      expect(res.data.getMovies).toBeDefined()
      expect(Array.isArray(res.data.getMovies)).toBeTruthy()
      expect(MovieModel.aggregate).toHaveBeenCalledTimes(1)
    })
  })
})
