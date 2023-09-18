const express = require( 'express' );
const cors = require( 'cors' );
const indexRoutes = require( '../routes/index' );
const { dbConnection } = require('../config/database');

class Server {

    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.staticFiles();
        this.routes();
    }

    settings () {
        this.app.set( 'PORT', process.env.PORT || 3500 );
    }

    middlewares () {
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
        this.app.use( cors() );
    }

    routes () {
        this.app.use( '/api', indexRoutes );
    }

    staticFiles () {
        this.app.use( express.static( 'public' ) );
    }

    async start () {
        try {
            await this.app.listen( this.app.get( 'PORT' ) );
            const connectionResult = await dbConnection();
            console.log( `=====================================================================================`.red );
            console.log( `\t\t-> Node JS Server started on port: ${ this.app.get( 'PORT' ) } <-`.green );
            console.log( `-> Mongo DB Connection Started on port: ${ connectionResult.connection.host } <-`.green )
            console.log( `=====================================================================================`.red );
        } catch ( error ) {
            throw new Error( `Coffee App Error: ${ error }` );
        }
    }
}

module.exports = {
    Server
}