require( 'colors' );
const { Server } = require('./models/Server');

require( 'dotenv/config' );

const main = async () => {
    const server = new Server();
    await server.start();
}

main();