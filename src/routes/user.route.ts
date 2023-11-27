import { Router } from 'express';
import { Routes } from './index';

export class UserRouter implements Routes{
     path="/users";
     router= Router();

     constructor() {
        this.initializeRoutes();
      }
    
      private initializeRoutes() {
        this.router.get(`${this.path}`);
        this.router.get(`${this.path}/:id`);
        this.router.post(`${this.path}`);
        this.router.put(`${this.path}/:id`);
        this.router.delete(`${this.path}/:id`);
      }
}
