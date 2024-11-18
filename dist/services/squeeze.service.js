"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSqueezeById = exports.createSqueeze = exports.getAllSqueezes = void 0;
const sqeeze_model_1 = require("../models/sqeeze.model");
const getAllSqueezes = async () => {
    return await sqeeze_model_1.Squeeze.find();
};
exports.getAllSqueezes = getAllSqueezes;
const createSqueeze = async (data) => {
    const squeeze = sqeeze_model_1.Squeeze.create(data);
    return await squeeze.save();
};
exports.createSqueeze = createSqueeze;
const getSqueezeById = async (id) => {
    return await sqeeze_model_1.Squeeze.findOne({ where: { id } });
};
exports.getSqueezeById = getSqueezeById;
//# sourceMappingURL=squeeze.service.js.map