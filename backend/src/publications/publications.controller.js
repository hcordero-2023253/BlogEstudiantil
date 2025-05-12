import PublicationSchema from "./publications.model.js";
import imagePaths from "../../middleware/imgUrl.js";

/*Agregar una publicacion desde el backend */
export const addPublication = async (req, res) => {
    try {
        const data = req.body;
        console.log("Datos recibidos:", data);

        if (!data.title || !data.content || !data.category) {
            return res.status(400).send({
                success: false,
                message: "Faltan datos requeridos",
            });
        }

        const category = data.category?.toUpperCase();
        console.log("Categoría procesada:", category);

        data.imageUrl = imagePaths[category] || imagePaths.DEFAULT;
        console.log("Imagen asignada (base64 o ruta):", data.imageUrl);

        const newPublication = new PublicationSchema(data);
        await newPublication.save();
        res.status(201).send({ 
            success: true, 
            message:"La publicacion fue agregada con exito",
            newPublication
        });
    } catch (error) {
        res.status(500).send({ success: false,
            message: "Error al agregar la publicación", 
            error 
        });
    }
};

export const getPublications = async (req, res) => {
    try {
        const publications = await PublicationSchema.find(); // Obtiene todas las publicaciones
        res.status(200).send({
            success: true,
            publications,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error al obtener las publicaciones",
            error,
        });
    }
};

export const getCategories = async (req, res) =>{
    try {
        const categories = await PublicationSchema.find().distinct('category');
        res.status(200).send({ success: true, categories}) 
    } catch (error) {
        res.status(500).send({ success: false,
            message: "Error filtrar categoria", 
            error 
        });
    }
}


