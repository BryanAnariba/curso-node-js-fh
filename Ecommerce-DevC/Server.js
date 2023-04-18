require( 'dotenv/config' );
require( 'colors' );
const express = require( 'express' );
const cors = require( 'cors' );
const { dbConnect } = require('./config/DBConnection');
const indexRoutes = require( './routes/index' );

class Server {
    
    constructor () {

        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();

    }

    settings () {

        this.app.set( 'PORT', process.env.PORT || 5000 );

    } 

    middlewares () {

        this.app.use( express.urlencoded({ extended: true }) );
        this.app.use( express.json() );
        this.app.use( cors() );

    }

    routes () {
        this.app.use( indexRoutes );
    }

    async startServer () {

        try {
            await this.app.listen( this.app.get( `PORT` ) );
            const conn = await dbConnect();
            console.log( `==========================================================================`.red );
            console.log( `NodeJS Server started on port: ${ this.app.get( `PORT` ) }`.cyan );
            console.log( `MongoDB Server started on port: ${ conn.connection.host }`.cyan )
            console.log( `==========================================================================`.red );
        } catch ( err ) {
            throw new Error( err );
        }

    }

}

module.exports = {
    Server
}