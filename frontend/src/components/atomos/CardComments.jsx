import styled from "styled-components";
import { useState, useEffect } from "react";
import { useComments } from "../../store/useComments"; 


export const CardComments = ({ publication, onSubmit }) => {
  const { dataComments, isLoading, fetchComments, createComment, isCreatingComment } = useComments();
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
      if (publication) {
          fetchComments(publication.id);
      }
  }, [publication, fetchComments]);

  const handleAddComment = () => {
      if (newComment.trim() && username.trim()) {
          createComment(publication._id, { content: newComment, username }) // Usar el método del hook
              .then(() => {
                  fetchComments(publication._id); // Actualiza los comentarios después de agregar uno nuevo
                  setNewComment("");
                  setUsername(""); // Limpiar el campo de usuario
              })
              .catch((error) => console.error("Error adding comment:", error));
      } else {
          alert("Por favor, ingresa un nombre de usuario y un comentario.");
      }
  };

  return (
      <Container>
          <h4>Comentarios para: {publication.title}</h4>
          <CommentsSection>
              {isLoading ? (
                  <p>Cargando comentarios...</p>
              ) : (
                  dataComments.map((comment, index) => (
                      <Comment key={index}>
                          <strong>{comment.username}:</strong> {comment.content}
                      </Comment>
                  ))
              )}
              <CommentInput
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Tu nombre"
              />
              <CommentInput
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Escribe un comentario..."
              />
              <SubmitButton onClick={handleAddComment} disabled={isCreatingComment}>
                  {isCreatingComment ? "Enviando..." : "Enviar"}
              </SubmitButton>
          </CommentsSection>
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

const CommentsSection = styled.div`
    margin-top: 20px;
`;

const Comment = styled.div`
    background-color: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
`;

const CommentInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const SubmitButton = styled.button`
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