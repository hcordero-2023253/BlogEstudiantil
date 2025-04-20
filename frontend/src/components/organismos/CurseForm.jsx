import styled from "styled-components"
import { Button } from "../atomos/Button"

export const CurseForm = () => {
    return (
        <PageWrapper>
            <LeftPanel>
                <Container>
                    <Title>Comments And Publications</Title>
                    <Button>Hola</Button>

                    <Container2>
                        <FieldGroupFull>
                            <Paragraph>Name</Paragraph>
                            <Input type="text" placeholder="Add Name" />
                        </FieldGroupFull> 

                        <FieldGroupFull>
                            <Paragraph>Last Name</Paragraph>
                            <Input type="text" placeholder="Add Name" />
                        </FieldGroupFull> 
                    </Container2>    

                    <FieldGroup>
                        <Paragraph> Title Comment</Paragraph>
                        <Input2 type="text" placeholder="Add Title" />
                    </FieldGroup>
                    
                    <FieldGroup>
                        <Paragraph>Issue Date</Paragraph>
                        <DateInput type="date" defaultValue="N/A" />
                    </FieldGroup>

                    <FieldGroupFullComment>
                        <Paragraph>Description</Paragraph>
                        <Input3 type="text"  />
                    </FieldGroupFullComment>
                </Container>
            </LeftPanel>


            <RightPanel>
                <RightTitle>Published Comments</RightTitle>
                <CommentCard>
                    <h4>John Doe</h4>
                    <p>This is a test comment. Great event!</p>
                    <button>View Comments</button>
                </CommentCard>
                <CommentCard>
                    <h4>Jane Smith</h4>
                    <p>Looking forward to it!</p>
                    <button>View Comments</button>
                </CommentCard>
            </RightPanel>
        </PageWrapper>
    )

}
const PageWrapper = styled.div`
    display: flex;
    height : 100%;
    width: 100%;
`
const Container = styled.div`
    display : flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #43dfea8f, #2e1e84);
  min-height: 100vh;
  padding: 10px 20px;
  font-family: 'Segoe UI', sans-serif;
`
const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`
const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
  color: #fff;
`
const Input = styled.input`
  width: 90%;
  height: 45px;
  padding: 0 1px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  transition: all 0.3s ease;
`
const Input2 = styled.input`
    width: 125%;
    height: 45px;
    padding: 0 1px;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    transition: all 0.3s ease;
`
const Input3 = styled.textarea`
    width: 100%;
    height: 120px;
    padding: 15px;
    border-radius: 12px;
    border: none;
    
    font-size: 16px;
`
const DateInput = styled(Input)``;
const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

`;

const FieldGroupFull = styled.div`
    width: 100%;
    margin: 0.5%;
     
    @media (max-width: 750px) {
        width: 100%;
    }
`;

const Container2 = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25PX;

  @media (max-width: 768px) {
    width: 50%;
    flex-direction: column;
    gap: 15px;
  }
`;

const FieldGroupFullComment = styled.div`
    width: 50%;
    margin: 10%;

    @media (max-width: 750px) {
        width: 70%;
    }
`;




const LeftPanel = styled.div`
    flex: 1;
    overflow-y: auto;
`
const RightPanel = styled.div`
    flex: 1;
    background: linear-gradient(to bottom, #2e1e84, #43dfea8f);
    padding: 30px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`

const RightTitle = styled.h3`
  font-size: 26px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const CommentCard = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(121, 66, 66, 0.1);

  h4 {
    margin: 0 0 8px;
    font-size: 18px;
    color: #111;
  }

  p {
    margin: 0;
    font-size: 16px;
    color: #444;
  }
  button{
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 15 15px;
  }
  button:hover{
    background-color: #694242;
  }
`;