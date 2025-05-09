'use strict'

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const configs = (app)=>{
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
}

const routes = (app) =>{

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