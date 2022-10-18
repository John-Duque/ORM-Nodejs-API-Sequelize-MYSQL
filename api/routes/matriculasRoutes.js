const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();
router.get('/pessoas/:estudante_id/matricula/:matricula_id', MatriculaController.pegaUmaMatricula);
router.post('/pessoas/:estudante_id/matricula', MatriculaController.criarMatricula);
router.put('/pessoas/:estudante_id/matricula/:matricula_id', MatriculaController.atualizarMatricula);
router.delete('/pessoas/:estudante_id/matricula/:matricula_id', MatriculaController.apagaMatricula);

module.exports = router;