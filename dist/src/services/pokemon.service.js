"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePokemon = exports.updatePokemon = exports.getPokemonById = exports.getAllPokemons = exports.createPokemon = void 0;
const prisma_1 = require("../lib/prisma");
const createPokemon = async (nome, numeroPokedex, peso, altura, tipo1Id, tipo2Id) => {
    return await prisma_1.prisma.pokemon.create({
        data: {
            nome,
            numeroPokedex,
            peso,
            altura,
            tipo1Id,
            tipo2Id,
        },
        include: {
            tipo1: true,
            tipo2: true,
        },
    });
};
exports.createPokemon = createPokemon;
const getAllPokemons = async () => {
    return await prisma_1.prisma.pokemon.findMany({
        include: {
            tipo1: true,
            tipo2: true,
        },
    });
};
exports.getAllPokemons = getAllPokemons;
const getPokemonById = async (id) => {
    return await prisma_1.prisma.pokemon.findUnique({
        where: {
            id,
        },
        include: {
            tipo1: true,
            tipo2: true,
        },
    });
};
exports.getPokemonById = getPokemonById;
const updatePokemon = async (id, data) => {
    return await prisma_1.prisma.pokemon.update({
        where: {
            id,
        },
        data,
        include: {
            tipo1: true,
            tipo2: true,
        },
    });
};
exports.updatePokemon = updatePokemon;
const deletePokemon = async (id) => {
    return await prisma_1.prisma.pokemon.delete({
        where: {
            id,
        },
    });
};
exports.deletePokemon = deletePokemon;
