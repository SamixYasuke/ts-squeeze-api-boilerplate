"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app");
const sqeeze_model_1 = require("../models/sqeeze.model");
const data_source_1 = require("../data-source");
describe("SqueezeController", () => {
    beforeAll(async () => {
        await data_source_1.AppDataSource.initialize();
    });
    afterAll(async () => {
        await data_source_1.AppDataSource.destroy();
    });
    it("should fetch all squeezes", async () => {
        const response = await (0, supertest_1.default)(app_1.app).get("/api/squeezes");
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
    it("should create a squeeze", async () => {
        const newSqueeze = {
            email: "test@example.com",
            first_name: "John",
            last_name: "Doe",
            phone: "1234567890",
            location: "Test Location",
            job_title: "Test Job",
            company: "Test Company",
            interests: ["coding", "reading"],
            referral_source: "Google",
        };
        const response = await (0, supertest_1.default)(app_1.app).post("/api/squeezes").send(newSqueeze);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("email", newSqueeze.email);
    });
    it("should fetch a squeeze by id", async () => {
        const squeeze = await sqeeze_model_1.Squeeze.create({
            email: "john.doe@example.com",
            first_name: "John",
            last_name: "Doe",
            phone: "9876543210",
            location: "New Location",
            job_title: "Developer",
            company: "New Company",
            interests: ["coding"],
            referral_source: "Facebook",
        }).save();
        const response = await (0, supertest_1.default)(app_1.app).get(`/api/squeezes/${squeeze.id}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("email", squeeze.email);
    });
    it("should return 404 for a non-existing squeeze", async () => {
        const response = await (0, supertest_1.default)(app_1.app).get("/api/squeezes/non-existing-id");
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message", "Squeeze not found");
    });
});
//# sourceMappingURL=squeeze.test.js.map