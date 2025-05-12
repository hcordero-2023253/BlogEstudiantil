import {Router} from 'express';
import {
    addPublication,
    getPublications
} from './publications.controller.js';

const publication = Router();

publication.post('/addPublication', addPublication);
publication.get("/publications", getPublications);

export default publication;