import 'dotenv/config';
import { Server } from './Server';

const main = async () => {
    const server = new Server();
    await server.startServer();
}

main();