import express from "express";

import {SERVER_CONFIG} from "./config";

const app = express();

app.get("/status",function(req,res,next){
    res.send("working");
});

app.listen(SERVER_CONFIG.PORT, () => {
    console.log(`Server is running in http://localhost:${SERVER_CONFIG.PORT}`);
})