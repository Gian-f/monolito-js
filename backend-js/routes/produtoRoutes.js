const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

// Implementações das rotas


/**
 * @swagger
 * /produto:
 *  get:
 *    tags:
 *      - Produto
 *    summary: Retorna uma lista de produtos
 *    responses:
 *      200:
 *        description: Uma matriz de produtos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    description: ID do produto
 *                  nome:
 *                    type: string
 *                    description: Nome do produto
 *                  descricao:
 *                    type: string
 *                    description: Descrição do produto
 *                  preco:
 *                    type: string
 *                    description: Preço do produto
 */
router.get('/', async (req, res) => {
  try {
    res.json(await req.produtoService.findAll());
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

/**
 * @swagger
 * /produto/{id}:
 *  get:
 *    tags:
 *      - Produto
 *    summary: Retorna um produto pelo seu ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: O ID do produto.
 *    responses:
 *      200:
 *        description: O produto encontrado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  id:
 *                    type: string
 *                    description: ID do produto
 *                  nome:
 *                    type: string
 *                    description: Nome do produto
 *                  descricao:
 *                    type: string
 *                    description: Descrição do produto
 *                  preco:
 *                    type: string
 *                    description: Preço do produto
 *      400:
 *        description: Erro ao encontrar o produto.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                erro:
 *                  type: string
 *                  description: Mensagem de erro
 */
router.get('/:id', async (req, res) => {
  try {
    res.json(await req.produtoService.findOne(req.params.id));
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

/**
 * @swagger
 * /produto:
 *  post:
 *    tags:
 *      - Produto
 *    summary: Cria um novo produto.
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                  id:
 *                    type: string
 *                    description: ID do produto
 *                  nome:
 *                    type: string
 *                    description: Nome do produto
 *                  descricao:
 *                    type: string
 *                    description: Descrição do produto
 *                  preco:
 *                    type: string
 *                    description: Preço do produto
 *          required:
 *            - nome
 *    responses:
 *      200:
 *        description: O produto foi criado com sucesso.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  id:
 *                    type: string
 *                    description: ID do produto
 *                  nome:
 *                    type: string
 *                    description: Nome do produto
 *                  descricao:
 *                    type: string
 *                    description: Descrição do produto
 *                  preco:
 *                    type: string
 *                    description: Preço do produto
 *      400:
 *        description: Erro ao criar o produto.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                erro:
 *                  type: string
 *                  description: Mensagem de erro
 */
router.post('/', async (req, res) => {
  try {
    const produtoCriado = await req.produtoService.create(req.body);
    res.status(201).json(produtoCriado);
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

/**
 * @swagger
 * /produto/{id}:
 *  put:
 *    tags:
 *      - Produto
 *    summary: Atualiza um produto pelo seu ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: O ID do produto.
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                  id:
 *                    type: string
 *                    description: ID do produto
 *                  nome:
 *                    type: string
 *                    description: Nome do produto
 *                  descricao:
 *                    type: string
 *                    description: Descrição do produto
 *                  preco:
 *                    type: string
 *                    description: Preço do produto
 *    responses:
 *      200:
 *        description: O produto foi atualizado com sucesso.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  id:
 *                    type: string
 *                    description: ID do produto
 *                  nome:
 *                    type: string
 *                    description: Nome do produto
 *                  descricao:
 *                    type: string
 *                    description: Descrição do produto
 *                  preco:
 *                    type: string
 *                    description: Preço do produto
 *      400:
 *        description: Erro ao atualizar o produto.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                erro:
 *                  type: string
 *                  description: Mensagem de erro
 */

router.put('/:id', async (req, res) => {
  try {
    res.json(await req.produtoService.update(req.params.id, req.body));
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

/**
 * @swagger
 * /produto/{id}:
 *  delete:
 *    tags:
 *      - Produto
 *    summary: Deleta um produto pelo seu ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: O ID do produto.
 *    responses:
 *      200:
 *        description: O produto foi deletado com sucesso.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                result:
 *                  type: string
 *                  description: Mensagem de sucesso
 *      400:
 *        description: Erro ao deletar o produto.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                erro:
 *                  type: string
 *                  description: Mensagem de erro
 */

router.delete('/:id', async (req, res) => {
  try {
    res.json(await req.produtoService.delete(req.params.id));
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

module.exports = router;