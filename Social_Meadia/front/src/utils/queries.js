import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
	{
		getPosts {
			id
			body
			createdAt
			username
			likes {
				id
				createdAt
				username
			}
			comments {
				id
				createdAt
				username
				body
			}
			likeCount
			commentCount
		}
	}
`;
