import styled from "styled-components";
import { FaCommentDots } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { PublicationsCard } from "../atomos/CardPublication";
import { CommentsSection } from "../organismos/CommentsForm";
import { usePublications } from "../../store/usePublications";

export const CurseForm = () => {
    const { dataPublications, isLoading, fetchPublications } = usePublications();
    const [selectedPublication, setSelectedPublication] = useState(null); 
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    
    useEffect(() => {
        fetchPublications();
    }, []);

    useEffect(() => {
        console.log("Publicaciones obtenidas:", dataPublications);
    }, [dataPublications]);

    const handleAddComment = (comment) => {
        console.log("Comentario enviado:", comment);
    };

    const handleSelectPublication = (publication) => {
        console.log("Publicación seleccionada:", publication);
        setSelectedPublication(publication);
    };
    const filteredPublications = selectedCategory === "ALL" ? dataPublications
    : dataPublications.filter((publication) => publication.category?.toUpperCase() === selectedCategory);

    return (
        <Container>
            <Boxheader>
                <Title>Sección de Publicaciones</Title>
                <Subtitle>Explora las publicaciones y comenta en ellas</Subtitle>
            </Boxheader>

            <FilterButtons>
                <FilterButton
                    onClick={() => setSelectedCategory("ALL")}
                    active={selectedCategory === "ALL"}
                >
                    Todas
                </FilterButton>
                <FilterButton
                    onClick={() => setSelectedCategory("TALLER")}
                    active={selectedCategory === "TALLER"}
                >
                    Taller
                </FilterButton>
                <FilterButton
                    onClick={() => setSelectedCategory("TECNOLOGIA")}
                    active={selectedCategory === "TECNOLOGIA"}
                >
                    Tecnología
                </FilterButton>
                <FilterButton
                    onClick={() => setSelectedCategory("PRACTICAS")}
                    active={selectedCategory === "PRACTICAS"}
                >
                    Prácticas
                </FilterButton>
            </FilterButtons>

            <Boxbody>
                {isLoading ? (
                    <p>Cargando publicaciones...</p>
                ) : (
                    filteredPublications.map((publication) => (
                        <div key={publication._id}>
                            <PublicationsCard
                                title={publication.title}
                                content={publication.content}
                                imageUrl={publication.imageUrl}
                                onCommentClick={() => handleSelectPublication(publication)}
                            />
                            {selectedPublication && selectedPublication._id === publication._id && (
                                <CommentsSection
                                    onSubmit={handleAddComment}
                                    publicationId={selectedPublication._id}
                                />
                            )}
                        </div>
                    ))
                )}
            </Boxbody>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    padding: 20px;
    background: linear-gradient(#3623e09e, #0f5d81);
`;

const Boxheader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    width: 50%;
    height: 20%;
    margin-left: 25%;
    margin-bottom: 20px;
    box-shadow: 10px 12px 5px rgb(0, 0, 0);
    background: linear-gradient(#1e1763, #0e9ee0);
`;

const FilterButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const FilterButton = styled.button`
    background-color: ${(props) => (props.active ? "#0e9ee0" : "#ccc")};
    color: ${(props) => (props.active ? "#fff" : "#000")};
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.active ? "#1e1763" : "#bbb")};
    }
`;

const Title = styled.h3`
    font-size: 26px;
    color: #ddd8d8;
    margin-bottom: 20px;
    text-align: center;
`;

const Subtitle = styled.p`
    font-size: 18px;
    color: #bbb;
    margin-top: -10px;
    text-align: center;
`;

const Boxbody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    width: 75%;
    padding: 30px;
    margin-left: 12.5%;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, #2e8ec5, #0e9ee0);
    border: 1px solid #0e9ee0;
`;