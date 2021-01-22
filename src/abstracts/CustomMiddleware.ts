import express from "express";

abstract class CustomMiddleware {
    protected app: express.Express | null = null;
    public setup(app: express.Express){
        this.app = app;
    }
    public abstract init(): void;
    public abstract run(): void;
}

export default CustomMiddleware;