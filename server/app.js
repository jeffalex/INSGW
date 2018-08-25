import bodyParser from "body-parser";
import cors from "cors";
import express  from "express";
import http from "http";
import mapRoutes from 'express-routes-mapper'; 
import routes from './config/routes';
import dotenv from "dotenv";
dotenv.config();

let app = express();
app.server = http.createServer(app);

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mappedRoutes = mapRoutes(routes,'server/controllers/');
app.use('/', mappedRoutes);
app.server.listen(process.env.PORT || process.env.APP_PORT);
console.log(`Started on port ${app.server.address().port}`);


