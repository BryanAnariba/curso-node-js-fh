import express, { Application, Router } from 'express';

interface Options {
  port: number | undefined | string;
  routes: Router;
}

export class Server {
  private readonly app: Application = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port = 3500, routes } = options;
    this.routes = routes;
    this.port = Number(port);
  }

  async start(): Promise<any> {
    // Middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}));

    // Routes
    this.app.use(this.routes);

    // Start server
    await this.app.listen( this.port );
    console.clear();
    console.log(`===================================`);
    console.log(`NodeJS Server started on port: ${ this.port }`);
    console.log(`===================================`);
  }
}