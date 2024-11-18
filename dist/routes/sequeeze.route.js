"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const squeeze_controller_1 = require("../controllers/squeeze.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", squeeze_controller_1.getAllSqueezesController);
router.post("/", squeeze_controller_1.createSqueezeController);
router.get("/:id", squeeze_controller_1.getSqueezeByIdController);
exports.default = router;
//# sourceMappingURL=sequeeze.route.js.map