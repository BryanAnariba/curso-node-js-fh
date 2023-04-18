const { Server } = require("./Server");

const main = async () => {
    const server = new Server();
    await server.startServer();
}

main();