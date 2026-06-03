"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_controller_1 = require("../controllers/pokemon.controller");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const pokemon_schema_1 = require("../schemas/pokemon.schema");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// Publica
router.get('/', pokemon_controller_1.list);
router.get('/:id', pokemon_controller_1.getById);
// Privadas
router.post('/', auth_middleware_1.authenticate, (0, validate_middleware_1.validate)(pokemon_schema_1.createPokemonSchema), pokemon_controller_1.create);
router.put('/:id', auth_middleware_1.authenticate, (0, validate_middleware_1.validate)(pokemon_schema_1.updatePokemonSchema), pokemon_controller_1.update);
router.delete('/:id', auth_middleware_1.authenticate, pokemon_controller_1.remove);
exports.default = router;
