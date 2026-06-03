"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const user_schema_1 = require("../schemas/user.schema");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// Pública
router.post('/', (0, validate_middleware_1.validate)(user_schema_1.createUserSchema), user_controller_1.create);
// Privadas
router.get('/', auth_middleware_1.authenticate, user_controller_1.list);
router.get('/:id', auth_middleware_1.authenticate, user_controller_1.getById);
router.put('/:id', auth_middleware_1.authenticate, (0, validate_middleware_1.validate)(user_schema_1.updateUserSchema), user_controller_1.update);
router.delete('/:id', auth_middleware_1.authenticate, user_controller_1.remove);
exports.default = router;
