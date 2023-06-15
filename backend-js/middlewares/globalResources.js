const { connect } = require('../db');
const ProdutoService = require('../services/produtoService');
const DogService = require('../services/dogService');

const globalResources = async (req, res, next) => {
    // Pular o middleware se o caminho atual for '/api-docs'
    if (req.path.startsWith("/api-docs")) {
        return next();
    }

    try {
        req.db = await connect();
        req.produtoService = new ProdutoService(req.db);
        req.dogService = new DogService(req.db);
        next();
    } catch (ex) {
        console.error("Failed to connect to the database and create global resources:", ex);
        res.status(500).json({ erro: "Failed to connect to the database and create global resources" });
    }
};

module.exports = globalResources;