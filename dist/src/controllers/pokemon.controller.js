"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getById = exports.list = exports.create = void 0;
const pokemon_service_1 = require("../services/pokemon.service");
const create = async (req, res) => {
    try {
        const { nome, numeroPokedex, peso, altura, tipo1Id, tipo2Id, } = req.body;
        const pokemon = await (0, pokemon_service_1.createPokemon)(nome, numeroPokedex, peso, altura, tipo1Id, tipo2Id);
        return res.status(201).json(pokemon);
    }
    catch (error) {
        return res.status(500).json({
            error: 'Erro ao criar pokémon',
        });
    }
};
exports.create = create;
const list = async (req, res) => {
    try {
        const pokemons = await (0, pokemon_service_1.getAllPokemons)();
        return res.status(200).json(pokemons);
    }
    catch (error) {
        return res.status(500).json({
            error: 'Erro ao listar pokémons',
        });
    }
};
exports.list = list;
const getById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const pokemon = await (0, pokemon_service_1.getPokemonById)(id);
        if (!pokemon) {
            return res.status(404).json({
                message: 'Pokémon não encontrado',
            });
        }
        return res.status(200).json(pokemon);
    }
    catch (error) {
        return res.status(500).json({
            error: 'Erro ao buscar pokémon',
        });
    }
};
exports.getById = getById;
const update = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const pokemon = await (0, pokemon_service_1.updatePokemon)(id, req.body);
        return res.status(200).json(pokemon);
    }
    catch (error) {
        return res.status(500).json({
            error: 'Erro ao atualizar pokémon',
        });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await (0, pokemon_service_1.deletePokemon)(id);
        return res.status(200).json({
            message: 'Pokémon deletado com sucesso',
        });
    }
    catch (error) {
        return res.status(500).json({
            error: 'Erro ao deletar pokémon',
        });
    }
};
exports.remove = remove;
