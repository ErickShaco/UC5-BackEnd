import produtos from "../../../config/database.js";

export default class ProdutoModel {
  // Metodo para cadastrar um produto
  // O id do produto é passado no corpo da requisição
  static cadastrar(id, nome, preco, descricao) {
    produtos.push({
      id,
      nome,
      preco,
      descricao,
    });
  }
  // Metodo para editar um produto
  // O id do produto a ser editado é passado como parâmetro na URL
  static editar(id, novo_Nome, novo_Preco, nova_Descricao) {
    const produto = produtos.find((produto) => produto.id === id);
    produto.nome = novo_Nome || produto.nome;
    produto.preco = novo_Preco || produto.preco;
    produto.descricao = nova_Descricao || produto.descricao;
    return produto;
  }
  // Metodo para listar um produto pelo id
  // O id do produto é passado como parâmetro na URL
  static listarPorId(id) {
    const produto = produtos.find((produto) => produto.id === id);
    return produto;
  }
  // Metodo para listar todos os produtos
  // Retorna um array com todos os produtos cadastrados
  static listarTodos() {
    const produto = produtos.map((produto) => produto);
    return produto;
  }
  // Metodo para deletar todos os produtos
  // Retorna true se a operação for bem-sucedida
  static deletar() {
    produtos.length = 0;
    return true;
  }
  // Metodo para deletar um produto pelo id
  // O id do produto a ser deletado é passado como parâmetro na URL
  static deletarPorId(id) {
    const index = produtos.findIndex((produto) => produto.id === id);
    if (index === -1) {
      return null;
    }
    produtos.splice(index, 1);
    return true;
  }
}
