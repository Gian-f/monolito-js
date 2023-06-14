const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /dog:
 *   get:
 *     tags:
 *       - Dog
 *     summary: Retorna uma lista de raças de cachorro.
 *     responses:
 *       '200':
 *         description: A lista de raças de cachorro.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

router.get('/dog', async (req, res) => {
  try {
    res.json(await req.dogService.findAll());
  } catch(ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

module.exports = router;