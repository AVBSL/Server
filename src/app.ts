import express from "express";

import PassportMiddleware from "./middlewares/PassportMiddleware";
import {SERVER_CONFIG} from "./config";
import applyMiddlewares from "./utils/applyMiddlewares";

const app = express();

applyMiddlewares(app,[PassportMiddleware]);

app.get("/status",function(_req,res,_next){
    res.send("working");
});

app.listen(SERVER_CONFIG.PORT, () => {
    console.log(`Server is running in http://localhost:${SERVER_CONFIG.PORT}`);
})