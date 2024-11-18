"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSqueezeByIdController = exports.createSqueezeController = exports.getAllSqueezesController = void 0;
const squeeze_service_1 = require("../services/squeeze.service");
const asyncHandler_1 = require("../utils/asyncHandler");
exports.getAllSqueezesController = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const squeezes = await (0, squeeze_service_1.getAllSqueezes)();
    res.status(200).json({
        status_code: 200,
        message: "Squeezes Retrieved successfully",
        data: {
            squeezes,
        },
    });
});
exports.createSqueezeController = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email, first_name, last_name, phone, location, job_title, company, interests, referral_source, } = req.body;
    const squeeze = await (0, squeeze_service_1.createSqueeze)({
        email,
        first_name,
        last_name,
        phone,
        location,
        job_title,
        company,
        interests,
        referral_source,
    });
    res.status(201).json({
        status_code: 201,
        message: "Squeeze Created successfully",
        data: {
            squeeze,
        },
    });
});
exports.getSqueezeByIdController = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { id } = req.params;
    const squeeze = await (0, squeeze_service_1.getSqueezeById)(id);
    if (!squeeze) {
        return res
            .status(404)
            .json({ status_code: 404, message: "Squeeze not found" });
    }
    res.status(200).json({
        status_code: 200,
        message: "Squeeze Retrieved successfully",
        data: {
            squeeze,
        },
    });
});
//# sourceMappingURL=squeeze.controller.js.map