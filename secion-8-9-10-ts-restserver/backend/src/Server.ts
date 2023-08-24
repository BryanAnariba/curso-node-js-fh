import 'colors';
import express, { Application, urlencoded, json  } from "express";
import cors from 'cors';

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

    }

    staticFiles (): void {

    }

    async startServer (): Promise<void> {
        try {
            console.clear();
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