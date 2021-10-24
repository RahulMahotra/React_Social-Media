import React, { useEffect, useState } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export default function LikeButton({ post: { id, likes, likeCount }, user }) {
	const [liked, setLikes] = useState(false);

	useEffect(() => {
		if (user && likes.find((like) => user.username === like.username)) {
			setLikes(true);
		} else {
			setLikes(false);
		}
	}, [user, likes]);

	const [likePost] = useMutation(LIKE_POST_MUTATION, {
		variables: { postId: id },
	});

	const likeButton = user ? (
		liked ? (
			<Button color='teal'>
				<Icon name='heart' />
			</Button>
		) : (
			<Button color='teal' basic>
				<Icon name='heart' />
			</Button>
		)
	) : (
		<Button as={Link} to='/login' color='teal' basic>
			<Icon name='heart' />
		</Button>
	);
	return (
		<Button as='div' labelPosition='right' onClick={likePost}>
			{likeButton}
			<Label basic color='teal' pointing='left'>
				{likeCount}
			</Label>
		</Button>
	);
}

const LIKE_POST_MUTATION = gql`
	mutation likePost($postId: ID!) {
		likePost(postId: $postId) {
			id
			likes {
				id
				username
			}
			likeCount
		}
	}
`;
