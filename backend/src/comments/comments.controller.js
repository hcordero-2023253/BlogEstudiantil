import CommentSchema  from "./comments.model.js";
import PublicationSchema from "../publications/publications.model.js";

export const addComment = async (req, res) => {
    try {
        const data = req.body;
        console.log("Datos recibidos:", data);
        

        if (!data.username || !data.content || !data.publicationId) {
            return res.status(400).send({
                success: false,
                message: "Faltan datos requeridos",
            });
        }

        const publication = await PublicationSchema.findById(data.publicationId);
        if (!publication) {
            return res.status(404).send({
                success: false,
                message: "Publicación no encontrada",
            });
        }


        const newComment = new CommentSchema(data);
        
        await newComment.save();

        res.status(201).send({
            success: true,
            message: "Comentario agregado con éxito",
            newComment,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error al agregar el comentario",
            error,
        });
    }
};

export const getCommentsByPublication = async (req, res) => {
    try {
        const { publicationId } = req.params;

        if (!publicationId) {
            return res.status(400).send({
                success: false,
                message: "El ID de la publicación es requerido",
            });
        }

        const comments = await CommentSchema.find({ publicationId }) || []; // Asegúrate de devolver un arreglo

        res.status(200).send({
            success: true,
            comments,
        });
    } catch (error) {
        console.error("Error al obtener los comentarios:", error);
        res.status(500).send({
            success: false,
            message: "Error interno del servidor",
            error,
        });
    }
};