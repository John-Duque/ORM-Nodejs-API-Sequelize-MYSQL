const database = require('../models/index.js');
const { Op } = require('sequelize');

module.exports = class MatriculaController {
    // requisições feitas para a matricula
    // fazendo uma associação da pessoa com a matricula
    static async pegaUmaMatricula(req, res) {
        const { estudante_id, matricula_id } = req.params;
        try {
            const umaMatricula = await database.Matriculas.findAll({
                where: {
                    id: {
                        [Op.eq]: Number(matricula_id)
                    },
                    estudante_id: {
                        [Op.eq]: Number(estudante_id)
                    }
                }
            })
            return res.status(200).json(umaMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarMatricula(req, res) {
        const { estudante_id } = req.params;
        const novaMatricula = { ...req.body, estudante_id: Number(estudante_id) }
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarMatricula(req, res) {
        const { estudante_id, matricula_id } = req.params;
        const novasInfos = req.body;
        try {
            // Fazendo o Update
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: {
                        [Op.eq]: Number(matricula_id)
                    },
                    estudante_id: {
                        [Op.eq]: Number(estudante_id)
                    }
                }
            })
            // fazendo uma pesquisa da atualização que foi feita 
            const matriculaAtualizada = await database.Matriculas.findAll({
                where: {
                    id: {
                        [Op.eq]: Number(matricula_id)
                    }
                }
            })
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaMatricula(req, res) {
        const { estudante_id, matricula_id } = req.params;
        try {
            await database.Matriculas.destroy({
                where: {
                    id: {
                        [Op.eq]: Number(matricula_id)
                    },
                    estudante_id: {
                        [Op.eq]: Number(estudante_id)
                    }
                }
            })

            return res.status(200).json({ mensagem: `id ${matricula_id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}