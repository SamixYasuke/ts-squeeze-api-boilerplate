"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const isDevelopment = process.env.ISDEVELOPMENT === "true";
const swaggerJsonUrl = isDevelopment
    ? process.env.SWAGGER_JSON_URL_DEV
    : process.env.SWAGGER_JSON_URL_PROD;
const swaggerDefinition = {
    openapi: "3.1.0",
    info: {
        title: "BoilerPlate Express API with Swagger",
        version: "1.0.0",
        description: "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
        {
            url: swaggerJsonUrl,
            description: "Local server",
        },
    ],
    components: {
        schemas: {
            Squeeze: {
                type: "object",
                properties: {
                    id: { type: "string", format: "uuid" },
                    email: { type: "string", format: "email" },
                    first_name: { type: "string" },
                    last_name: { type: "string" },
                    phone: { type: "string" },
                    location: { type: "string" },
                    job_title: { type: "string" },
                    company: { type: "string" },
                    interests: { type: "string" },
                    referral_source: { type: "string" },
                },
                required: ["id", "email", "first_name", "last_name"],
            },
        },
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
};
const options = {
    swaggerDefinition,
    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.default = specs;
//# sourceMappingURL=swagger.config.js.map