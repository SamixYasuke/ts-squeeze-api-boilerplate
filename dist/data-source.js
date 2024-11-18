"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
exports.initializeDataSource = initializeDataSource;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const sqeeze_model_1 = require("./models/sqeeze.model");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [sqeeze_model_1.Squeeze],
    synchronize: true,
    logging: false,
});
async function initializeDataSource() {
    try {
        if (!exports.AppDataSource.isInitialized) {
            await exports.AppDataSource.initialize();
            console.log("Database connected successfully!");
        }
        return exports.AppDataSource;
    }
    catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}
//# sourceMappingURL=data-source.js.map