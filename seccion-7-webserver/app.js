require( 'dotenv/config' );
const { Server } = require('./Server');

require( 'colors' );

const main = async () => {
    const server = new Server();
    server.start();
}

main();