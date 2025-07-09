import express from "express";
const app = express();
app.use(express.json());

import { configDotenv } from "dotenv";
const port = process.env.PORTA;

import routeProduto from "./src/modules/produto/routes/produto.route.js";
