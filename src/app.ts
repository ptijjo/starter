import express from "express";
import "dotenv/config";
import http from "http";

export class App{

   private app: express.Application;
   private port:string | number;
    server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;

    constructor(){
        this.app = express();
        this.port= process.env.PORT || 8585;
        this.server= http.createServer(this.app);
    }

   public listen(){
        this.server.listen(this.port, ()=>{
        console.log(`Notre serveur tourne sur le port ${this.port}`);
        })
    }
}