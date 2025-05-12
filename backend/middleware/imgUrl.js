import { fileURLToPath } from "url"
import path from "path"
import sharp from "sharp"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageSave = async (filePath) =>{
    const absolutePath = path.join(__dirname, filePath);
    try {
        const compressedBuffer = await sharp(absolutePath)
            .resize(200, 150, {
                fit: sharp.fit.inside,
                withoutEnlargement: true
            })
            .jpeg({ quality: 50 })
            .toBuffer();   
            return compressedBuffer.toString('base64');
    } catch (error) {
        console.error(`Error al procesar la imagen ${filePath}:`, error);
        return null;
    }    
}

const initializeImagePaths = async () => {
    return {
        TALLER: await imageSave("../public/assets/Taller.png"),
        TECNOLOGIA: await imageSave("../public/assets/Tecnologia.jpeg"),
        PRACTICAS: await imageSave("../public/assets/Practicas.jpeg"),
    };
};
const imagePaths = await initializeImagePaths();
export default imagePaths