const database = require('../models/index.js'); // Para fazer a coneão com o banco e as querys
const { Op } = require('sequelize'); // Para melhorar o tipo de consulta que fazemos na hora de fazer as comparações 

module.exports = class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            // SELECT * FROM Pessoas;
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params;
        try {
            // SELECT * FROM Pessoas WHERE Id = ${id};
            const umaPessoa = await database.Pessoas.findAll({
                where: {
                    id: {
                        [Op.eq]: Number(id)
                    }
                }
            })
            return res.status(200).json(umaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarPessoa(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            // Fazendo o Update
            await database.Pessoas.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            // fazendo uma pesquisa da atualização que foi feita 
            const pessoaAtualizada = await database.Pessoas.findAll({
                where: {
                    id: {
                        [Op.eq]: Number(id)
                    }
                }
            })

            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}