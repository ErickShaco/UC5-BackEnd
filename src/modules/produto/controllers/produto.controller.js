import ProdutoModel from "../models/produto.model";

export default class ProdutoController {
  // Metodo para Controlar o cadastro de um produto
  // O id do produto é passado no corpo da requisição
  // campos são obrigatórios
  static cadastrar(req, res) {
    try {
      const { id, nome, preco, descricao } = req.body;
      if (!id || !nome || !preco || !descricao) {
        return res.status(400).json({
          msg: "Todos os campos são obrigatórios",
        });
      }
      ProdutoModel.cadastrar(id, nome, preco, descricao);
      res.status(201).json({
        msg: "Produto Cadastrado com Sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
  // Metodo para Controlar a edição de um produto
  // O id do produto a ser editado é passado como parâmetro na URL
  static editar(req, res) {
    try {
      const { novo_Nome, novo_Preco, nova_Descricao } = req.body;
      const id = parseInt(req.params.id);
      const produto = ProdutoModel.editar(
        id,
        novo_Nome,
        novo_Preco,
        nova_Descricao
      );
      res.status(200).json({
        msg: "Produto atualizado com sucesso!",
        produto,
      });
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
  // Metodo para Controlar a listagem de todos os produtos
  // Retorna um array com todos os produtos cadastrados
  static listarTodos(req, res) {
    try {
      const produtos = ProdutoModel.listarTodos();
      if (produtos.length === 0) {
        return res.status(404).json({ msg: "Nenhum produto encontrado!" });
      }
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
  // Metodo para Controlar a listagem de um produto pelo id
  // O id do produto é passado como parâmetro na URL
  static listarPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const produto = ProdutoModel.listarPorId(id);
      if (!produto) {
        return res.status(404).json({ msg: "Produto não encontrado!" });
      }
      res.status(200).json(produto);
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
  // Metodo para Controlar a exclusão de todos os produtos
  static deletarTodos(req, res) {
    try {
      ProdutoModel.deletar();
      res.status(200).json({ msg: "Todos os produtos foram deletados!" });
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
  // Metodo para Controlar a exclusão de um produto pelo id
  // O id do produto a ser deletado é passado como parâmetro na URL
  static deletarPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const produto = ProdutoModel.deletarPorId(id);
      if (produto === null) {
        return res.status(404).json({ msg: "Produto não encontrado!" });
      }
      res.status(200).json({ msg: "Produto deletado com sucesso!" });
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
}
