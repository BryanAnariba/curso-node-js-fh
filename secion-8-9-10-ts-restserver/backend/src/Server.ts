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
        this.app.use(  );
    }

    routes (): void {

    }

    staticFiles (): void {

    }

    async startServer (): Promise<void> {

    }
}