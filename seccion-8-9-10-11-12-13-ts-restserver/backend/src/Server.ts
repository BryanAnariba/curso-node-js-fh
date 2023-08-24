import 'colors';
import path from 'node:path';
import cors from 'cors';
import express, { Application, urlencoded, json  } from "express";
import indexRoutes from './routes/index';

export class Server {

    app!: Application;

    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }

    settings (): void {
        this.app.set( 'PORT', process.env.PORT || 5000 );
    }

    middlewares (): void {
        this.app.use( cors() );
        this.app.use( json() );
        this.app.use( urlencoded({ extended: true }) );
    }

    routes (): void {
        this.app.use( '/api', indexRoutes );
    }

    staticFiles (): void {
        this.app.use('/', express.static(path.join(__dirname, 'www')))
    }

    async startServer (): Promise<void> {
        try {
            await this.app.listen( this.app.get( 'PORT' ) );
            console.log( `====================================`.red );
            console.log( `Node JS Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
            console.log( `====================================`.red );
        } catch ( error ) {
            throw new Error( `Error: ${ error }` );
        } finally {
            process.exit;
        }
    }
    
}