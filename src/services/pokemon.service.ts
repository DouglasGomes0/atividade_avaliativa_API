import { prisma } from '../lib/prisma';

export const createPokemon = async (
  nome: string,
  numeroPokedex: number,
  peso: number,
  altura: number,
  tipo1Id: number,
  tipo2Id?: number
) => {
  return await prisma.pokemon.create({
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

export const getAllPokemons = async () => {
  return await prisma.pokemon.findMany({
    include: {
      tipo1: true,
      tipo2: true,
    },
  });
};

export const getPokemonById = async (id: number) => {
  return await prisma.pokemon.findUnique({
    where: {
      id,
    },

    include: {
      tipo1: true,
      tipo2: true,
    },
  });
};

export const updatePokemon = async (
  id: number,
  data: {
    nome?: string;
    numeroPokedex?: number;
    peso?: number;
    altura?: number;
    tipo1Id?: number;
    tipo2Id?: number;
  }
) => {
  return await prisma.pokemon.update({
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

export const deletePokemon = async (id: number) => {
  return await prisma.pokemon.delete({
    where: {
      id,
    },
  });
};