import styled from "styled-components"
import { FaCommentAlt } from "react-icons/fa";

export const CommentsCard = ()=>{
    return(
      <CommentCard>
          <h4>Comment Title</h4>
          <p>This is a sample comment. You can add your thoughts here.</p>
          <AddCommentButton> <FaCommentAlt/>Comment</AddCommentButton>
      </CommentCard>
    )
}


const CommentCard = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 15px auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px; 
  width: 90%; 

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

  button {
    background-color: #0e9ee0;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1e1763; /* Color de hover */
    }
  }  
`;

const AddCommentButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  

  &:hover {
    background-color: #0e9ee0;
  }
`;
