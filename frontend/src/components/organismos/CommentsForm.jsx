import styled from "styled-components";
import { useComments } from "../../store/useComments";
import { useEffect, useState } from "react";

export const CommentsSection = ({ publicationId }) => {
    const { dataComments, isLoading, fetchComments, createComment } = useComments();
    const [isAddingComment, setIsAddingComment] = useState(false); 
    const [newComment, setNewComment] = useState("");
    const [username, setUsername] = useState("");

    const handleAddComment = async () => {
        if (!newComment.trim()) {
            alert("El comentario no puede estar vacío.");
            return;
        }

        await createComment(publicationId, { 
            content: newComment, 
            username,
            date: new Date().toISOString,

        });

        setNewComment(""); 
        setUsername("");
        setDate(Date.now())
        setIsAddingComment(false);

        fetchComments(publicationId); 
    };

    useEffect(() => {
        if (!publicationId) {
            console.error("publicationId es undefined o inválido");
            return;
        }
        fetchComments(publicationId);
    }, [publicationId, fetchComments]);

    
    return (
        <Container>
            <h4>Comentarios:</h4>
            {dataComments.length > 0 ? (
                dataComments.map((comment) => (
                    <Comment key={comment._id}>
                        <strong>{comment.username}:</strong> {comment.content}
                    </Comment>
                ))
            ) : (
                <p>No hay comentarios para esta publicación.</p>
            )}
            
            {!isAddingComment && (
                <AddCommentButton onClick={() => setIsAddingComment(true)}>
                    Agregar Comentario
                </AddCommentButton>
            )}

            {/* Formulario para agregar un comentario */}
            {isAddingComment && (
                <AddCommentForm>
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Tu nombre"
                    />
                    <Input
                        type="text"
                        value={new Date().toLocaleDateString()}
                        readOnly
                        placeholder="Fecha de publicacion"
                    />
                    <Textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Escribe tu comentario aquí..."
                    />
                    <div>
                        <SubmitButton onClick={handleAddComment}>Enviar</SubmitButton>
                        <CancelButton onClick={() => setIsAddingComment(false)}>Cancelar</CancelButton>
                    </div>
                </AddCommentForm>
            )}
        </Container>
    );
};

const Container = styled.div`
    background-color: #fff;
    padding: 20px;
    margin: 15px auto;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    font-size: 16px; 
    background-color: #f9f9f9; 
    color: #333; 
    resize: none; 

    &:focus {
        outline: none; 
        border-color: #0e9ee0; 
        box-shadow: 0 0 5px rgba(14, 158, 224, 0.5); 
        background-color: #fff; 
    }

    &::placeholder {
        color: #aaa;
        font-style: italic; 
    }
`;

const Textarea = styled.textarea`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 50%;
    height: 100px; 
    font-size: 16px; 
    background-color: #f9f9f9; 
    color: #333; 
    resize: none; 

    &:focus {
        outline: none; 
        border-color: #0e9ee0; 
        box-shadow: 0 0 5px rgba(14, 158, 224, 0.5); 
        background-color: #fff; 
    }

    &::placeholder {
        color: #aaa;
        font-style: italic; 
    }
`

const Comment = styled.div`
    background-color: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
`;

const AddCommentButton = styled.button`
    background-color: #0e9ee0;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        background-color: #1e1763;
    }
`;

const AddCommentForm = styled.div`
    margin-top: 10px;

    textarea {
        width: 100%;
        height: 80px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    div {
        display: flex;
        justify-content: space-between;
    }
`;

const SubmitButton = styled.button`
    background-color: #0e9ee0;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background-color: #1e1763;
    }
`;

const CancelButton = styled.button`
    background-color: #ccc;
    color: #000;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background-color: #999;
    }
`;