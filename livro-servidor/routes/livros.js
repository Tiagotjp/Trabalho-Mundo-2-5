const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    try {
        const livros = await livroDao.obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({message: 'Erro ao obter os livros'});
    }
});

router.post('/', async (req, res) => {
    const novoLivro = req.body;
    novoLivro._id = new mongoose.Types.ObjectId();
    const resultado = await livroDao.incluir(novoLivro);

    if (resultado) {
        res.json({ mensagem: 'Livro incluído com sucesso' });
    } else {
        res.status(500).json({ mensagem: 'Falha ao incluir o livro' });
    }
});

router.delete('/:codigo', async (req, res) => {
    const livroId = req.params.codigo;
    const resultado = await livroDao.excluir(livroId);

    if (resultado) {
        res.json({ mensagem: 'Livro excluído com sucesso' });
    } else {
        res.status(500).json({ mensagem: 'Falha ao excluir o livro' });
    }
});

module.exports = router;