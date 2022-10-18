const database = require('../models/index.js');
const { Op } = require('sequelize');

module.exports = class TurmaController{
    static async pegaTodasAsTurmas(req, res){
        try {
            const todasAsTurmas = await database.Turmas.findAll();
            return res.status(200).json(todasAsTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params;
        try {
            const umaTurma  = await database.Turmas.findAll({
                where: {
                    id: {
                        [Op.eq]: Number(id)
                    }
                }
            })
            return res.status(200).json(umaTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async criaTurma(req, res) {
        const novaTurma = req.body;
        try {
           const novaTurmaCriada = await database.Turmas.create(novaTurma);
           return res.status(200).json(novaTurmaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Turmas.update(novasInfos,{
                where: {
                    id: Number(id)
                }
            })

            const turmaAtualizada = await database.Turmas.findAll({
                where: {
                    id: {
                        [Op.eq]: Number(id)
                    }
                }
            })

            return res.status(200).json(turmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({
                where: {
                    id: {
                        [Op.eq]: Number(id)
                    }
                }
            })
            return res.status(200).json({message:`id ${id} deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}