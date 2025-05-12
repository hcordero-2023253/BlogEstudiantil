import {Schema, model} from 'mongoose';

export const CommentSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    publicationId: {
        type: Schema.Types.ObjectId,
        ref: 'Publication',
        required: true
    }
}, {timestamps:true});

CommentSchema.methods.toJSON = function() {
    const {__v, ...comment} = this.toObject();
    return comment;
};

export default model('Comment', CommentSchema);