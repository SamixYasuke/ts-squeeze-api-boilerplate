"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const sequeeze_route_1 = __importDefault(require("./routes/sequeeze.route"));
const data_source_1 = require("./data-source");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_config_1 = __importDefault(require("./config/swagger.config"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use("/api/v1/squeeze", sequeeze_route_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_config_1.default));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status_code: 500, message: "Internal Server Error" });
});
const startServer = async () => {
    try {
        await (0, data_source_1.initializeDataSource)();
        app.listen(3000, () => {
            console.log("Server running on http://localhost:3000");
        });
    }
    catch (err) {
        console.error("Failed to start application:", err);
    }
};
startServer();
//# sourceMappingURL=app.js.map