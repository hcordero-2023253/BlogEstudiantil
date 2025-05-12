'use strict'

import express from 'express';
import path from 'path';
import { fileURLToPath } from "url"
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import publication from '../src/publications/publications.routes.js';
import comment from '../src/comments/comments.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configs = (app)=>{
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use('/assets', express.static(path.join(__dirname, '../public/assets')));
}

const routes = (app) =>{
    app.use('/v1/api', publication);
    app.use('/v1/api', comment);
}

export const initServer = () =>{
    const app = express();
    try {
        configs(app);
        routes(app);
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`);
        
    } catch (error) {
        console.error('Server initialization failed:', error);
        
    }
}