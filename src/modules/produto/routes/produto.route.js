import express from "express";
import ProdutoController from "../controllers/produto.controller.js";

const route = express.Router();
// Definindo as rotas para o CRUD de produtos
// As rotas são definidas com os métodos HTTP correspondentes

// Rota para listar todos os produtos
route.get("/produtos", ProdutoController.listarTodos);

// Rota para listar um produto pelo id
route.get("/produtos/:id", ProdutoController.listarPorId);

// Rota para cadastrar um novo produto
route.post("/produtos/cadastrar", ProdutoController.cadastrar);

// Rota para editar um produto
route.patch("/produtos/atualizar/:id", ProdutoController.editar);

// Rota para deletar todos os produtos
route.delete("/produtos/deletar", ProdutoController.deletarTodos);

// Rota para deletar um produto pelo id
route.delete("/produtos/deletar/:id", ProdutoController.deletarPorId);


export default route;