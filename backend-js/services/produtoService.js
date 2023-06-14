const Produto = require("../models/produto")

class ProdutoService {
    constructor(db) {
        this.produtoModel = new Produto(db);
    }
    
    async findOne(id) {
        return await this.produtoModel.findOne(id)
    }

    async findAll() {
        return await this.produtoModel.findAll()
    }
    
    async create(produto) {
        return await this.produtoModel.create(produto)
    }
    
    async update(id, produto) {
        return await this.produtoModel.update(id, produto)
    }
    
    async delete(id) {
        return await this.produtoModel.delete(id)
    }
}

module.exports = ProdutoService;