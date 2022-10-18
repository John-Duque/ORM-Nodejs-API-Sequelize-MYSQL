const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js'); // disponibilizar os metodos que foram criados na pessoaControllers

const router = Router();
//Passando todos os metodos que foram criados para suas respectivas rotas
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criarPessoa);
router.put('/pessoas/:id', PessoaController.atualizarPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);

module.exports = router;