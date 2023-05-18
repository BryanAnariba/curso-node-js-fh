const express = require( 'express' );
const hbs = require( 'hbs' );

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
        this.app.set( 'view engine', 'hbs' );
        hbs.registerPartials( __dirname + '/views/partials', function( err ) {});
        
    }

    middlewares () {
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
    }

    routes () {
        this.app.get( '/', ( req, res ) => {
            res.render(`home`, {
                nombreUsuario: 'Curso Node JS Bryan Ariel Sanchez Anariba',
                titulo: 'Home'
            });
        });
        this.app.get( '/elements', ( req, res ) => {
            res.render( 'elements', {
                nombreUsuario: 'Curso Node JS Bryan Ariel Sanchez Anariba',
                titulo: 'Elements'
            });
        });
        this.app.get( '/generic', ( req, res ) => {
            res.render( 'generic', {
                nombreUsuario: 'Curso Node JS Bryan Ariel Sanchez Anariba',
                titulo: 'Generic'
            });
        });
        this.app.use( '*', ( req, res ) => {
            //return res.status( 400 ).json({ statusCode: 400, data: 'Not Found' });
            res.sendFile( `${ __dirname }/public/404.html` );
        });
    }

    staticFiles () {
        this.app.use( express.static( 'public' ) );
    }

    async start () {
        try {
            await this.app.listen( this.app.get( 'PORT' ) );
            console.clear();
            console.log( `=================================`.red )
            console.log( `Node Server Started on port: ${ this.app.get( 'PORT' ) }`.cyan );
            console.log( `=================================`.red )
        } catch ( error ) {
            throw new Error( `Node Server Started Error: ${ error }` );
        }
    }

}

module.exports = {
    Server
}