import styled from "styled-components";
import { FaCommentAlt } from "react-icons/fa";
import { Button } from "./Button";

export const PublicationsCard = ({ title, content, imageUrl, onCommentClick }) => {
    return (
        <Container>
            <CommentCard>
                <h4>{title}</h4>
                <p>{content}</p>
                <Button onClick={onCommentClick}>
                    <FaCommentAlt /> Comment
                </Button>
            </CommentCard>
            {imageUrl && <Image src={`data:image/jpeg;base64,${imageUrl}`} alt={title} />}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;

const CommentCard = styled.div`
    background-color: #fff;
    padding: 20px;
    margin: 15px auto;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;

    h4 {
        margin: 0 0 8px;
        font-size: 20px;
        color: #333;
        font-weight: bold;
    }

    p {
        margin: 0 0 15px;
        font-size: 16px;
        color: #555;
        line-height: 1.5;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 170px;
    border-radius: 12px;
    margin-top: 15px;
`;