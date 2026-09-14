import styled from 'styled-components';
import type { Comment } from '../types';

interface CommentProps{
    comment: Comment
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:3px;
`;

const Info = styled.div`
    display: flex;
    gap: 5px;
`;

const Author = styled.div`
    font-weight: 800;
`;

const Role = styled.div`
    color: green;
`;

const Content = styled.div`
    color: black;

`;

function CommentItem({comment}: CommentProps)
{
    return(
    <Container>
        <Info>
            <Author>{comment.author}</Author>
            <Role>{comment.role}</Role>
        </Info>

        <Content>{comment.content}</Content>
    </Container>
    );
}

export default CommentItem;