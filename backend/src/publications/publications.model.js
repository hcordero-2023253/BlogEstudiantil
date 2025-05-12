import {Schema, model} from 'mongoose'; 

export const PublicationSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        uppercase: true,
        enum: ['TALLER', 'PRACTICAS', 'TECNOLOGIA'],
        default: 'TALLER'
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {timestamps:true});

PublicationSchema.methods.toJSON = function() {
    const {__v, ...publication} = this.toObject();
    return publication;
}

export default model('Publication', PublicationSchema);
