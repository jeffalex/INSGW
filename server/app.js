import bodyParser from "body-parser";
import cors from "cors";
import express  from "express";
import http from "http";

import dotenv from "dotenv";
dotenv.config();

let app = express();
app.server = http.createServer(app);

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.server.listen(process.env.PORT || process.env.APP_PORT);
console.log(`Started on port ${app.server.address().port}`);


