import { Request, Response } from 'express';

import {
  createPokemon,
  deletePokemon,
  getAllPokemons,
  getPokemonById,
  updatePokemon,
} from '../services/pokemon.service';

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      nome,
      numeroPokedex,
      peso,
      altura,
      tipo1Id,
      tipo2Id,
    } = req.body;

    const pokemon = await createPokemon(
      nome,
      numeroPokedex,
      peso,
      altura,
      tipo1Id,
      tipo2Id
    );

    return res.status(201).json(pokemon);

  } catch (error) {
    return res.status(500).json({
      error: 'Erro ao criar pokémon',
    });
  }
};

export const list = async (
  req: Request,
  res: Response
) => {
  try {
    const pokemons = await getAllPokemons();

    return res.status(200).json(pokemons);

  } catch (error) {
    return res.status(500).json({
      error: 'Erro ao listar pokémons',
    });
  }
};

export const getById = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const pokemon = await getPokemonById(id);

    if (!pokemon) {
      return res.status(404).json({
        message: 'Pokémon não encontrado',
      });
    }

    return res.status(200).json(pokemon);

  } catch (error) {
    return res.status(500).json({
      error: 'Erro ao buscar pokémon',
    });
  }
};

export const update = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const pokemon = await updatePokemon(
      id,
      req.body
    );

    return res.status(200).json(pokemon);

  } catch (error) {
    return res.status(500).json({
      error: 'Erro ao atualizar pokémon',
    });
  }
};

export const remove = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    await deletePokemon(id);

    return res.status(200).json({
      message: 'Pokémon deletado com sucesso',
    });

  } catch (error) {
    return res.status(500).json({
      error: 'Erro ao deletar pokémon',
    });
  }
};