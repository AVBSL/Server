import express from "express";
import CustomMiddleware from "../middlewares/CustomMiddleware";

function applyMiddlewares(app: express.Express, mdws: [CustomMiddleware]){
    mdws.forEach((mdw) =>{
        mdw.setup(app);
        mdw.init();
        mdw.run();
    });
}

export default applyMiddlewares;