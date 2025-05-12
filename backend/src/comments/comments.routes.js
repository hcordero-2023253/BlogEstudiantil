import { Router } from "express";
import {  addComment,getCommentsByPublication } from "./comments.controller.js";

const comment = Router();
comment.get('/getCommentsByPublication/:publicationId', getCommentsByPublication);
comment.post('/saveComment', addComment);

export default comment;