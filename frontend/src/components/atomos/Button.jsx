import styled from "styled-components"

export const Button = ({ children, onClick }) => {
  return (
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
  )
}


const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background-color 0.2s;
    color: #000000;
    cursor: pointer;
    background-color: #f0f0f0;
    box-shadow: 0 4px 10px rgb(0, 0, 0);
    &:hover {
      background-color: #78fafe;
      box-shadow: 0 4px 20px rgb(0, 0, 0);
    }
`


